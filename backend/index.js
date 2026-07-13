require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors()); 
app.use(bodyParser.json());

const PORT = process.env.PORT || 5175;
const url = process.env.MONGO_URL;
const JWT_SECRET = "mifflin_super_secret_key";

const { HoldingsModel } = require("../backend/model/HoldingsModel");
const { OrdersModel } = require("../backend/model/OrdersModel");
const { PositionsModel } = require("../backend/model/PositionsModel");
const { UserModel } = require("../backend/model/UserModel");

// JWT Authentication Middleware
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid token." });
    }
};

// SIGNUP Endpoint with Dynamic Portfolio Seeding
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }
    try {
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            username,
            password: hashedPassword
        });
        await newUser.save();

        // Auto-seed default holdings and positions for this user
        const defaultHoldings = [
            { username, name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
            { username, name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
            { username, name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
            { username, name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
            { username, name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" }
        ];
        const defaultPositions = [
            { username, product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
            { username, product: "POL", name: "JUBLFOOD", qty: 1, avg: 3024.75, price: 3082.65, net: "+10.04%", day: "+1.35%", isLoss: false }
        ];

        await HoldingsModel.insertMany(defaultHoldings);
        await PositionsModel.insertMany(defaultPositions);

        res.status(201).json({ message: "User registered and portfolio seeded successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error during registration." });
    }
});

// LOGIN Endpoint
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }
    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password." });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid username or password." });
        }
        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "24h" });
        res.json({ token, username: user.username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error during login." });
    }
});

// GET Holdings for Authenticated User
app.get('/allHoldings', authMiddleware, async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({ username: req.user.username });
        res.json(allHoldings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET Positions for Authenticated User
app.get('/allPositions', authMiddleware, async (req, res) => {
    try {
        let allPositions = await PositionsModel.find({ username: req.user.username });
        res.json(allPositions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST Place New Buy/Sell Order with Dynamic Portfolio Updates
app.post("/newOrder", authMiddleware, async (req, res) => {
    const { name, qty, price, mode } = req.body;
    const username = req.user.username;
    
    if (!name || !qty || !price || !mode) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        // Dynamic Portfolio Update
        if (mode === "BUY") {
            let holding = await HoldingsModel.findOne({ username, name });
            if (holding) {
                const newQty = holding.qty + Number(qty);
                const newAvg = ((holding.avg * holding.qty) + (Number(price) * Number(qty))) / newQty;
                holding.qty = newQty;
                holding.avg = Number(newAvg.toFixed(2));
                holding.price = Number(price);
                await holding.save();
            } else {
                const newHolding = new HoldingsModel({
                    username,
                    name,
                    qty: Number(qty),
                    avg: Number(price),
                    price: Number(price),
                    net: "+0.00%",
                    day: "+0.00%"
                });
                await newHolding.save();
            }
        } else if (mode === "SELL") {
            let holding = await HoldingsModel.findOne({ username, name });
            if (!holding || holding.qty < Number(qty)) {
                return res.status(400).json({ error: "Insufficient holdings to execute sell order." });
            }
            holding.qty -= Number(qty);
            if (holding.qty <= 0) {
                await HoldingsModel.deleteOne({ username, name });
            } else {
                await holding.save();
            }
        }

        const newOrder = new OrdersModel({
            username,
            name,
            qty: Number(qty),
            price: Number(price),
            mode
        });
        await newOrder.save();

        res.send("Order saved and portfolio updated!");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on Port : ${PORT}`);
    mongoose.connect(url);
    console.log("DB connected");
});


//SEED DATA CRUD
// app.get('/addHoldings',async(req,res)=>{
//     let tempHoldings=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
//     ];
//     tempHoldings.forEach((item)=>{
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         })
//         newHolding.save();
//     });
//     res.send("DONE");
// });

// app.get('/addPositions',async(req,res)=>{
//     let tempPositions=[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "POL",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3024.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "+1.35%",
//     isLoss: false,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//     ];
//     tempPositions.forEach((item)=>{
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         })
//         newPosition.save();
//     });
//     res.send("DONE");
// });