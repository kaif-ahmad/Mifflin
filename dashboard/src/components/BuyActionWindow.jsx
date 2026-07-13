import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const { closeBuyWindow } = useContext(GeneralContext);

    const handleBuyClick = async () => {
        console.log("Buy button clicked");
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:5175/newOrder", {
                name: uid,
                qty: Number(stockQuantity),
                price: Number(stockPrice),
                mode: "BUY",
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Request sent successfully");
            closeBuyWindow();
        } catch (err) {
            console.error(err);
        }
    };

    const handleCancelClick = () => {
        closeBuyWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <button className="btn btn-blue" onClick={handleBuyClick}>
                        Buy
                    </button>
                    <button to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;