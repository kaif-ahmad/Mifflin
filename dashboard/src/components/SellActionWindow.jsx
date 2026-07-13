import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const [availableHolding, setAvailableHolding] = useState(0);
    const [error, setError] = useState("");
    const { closeSellWindow } = useContext(GeneralContext);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:5175/allHoldings", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            const holding = res.data.find(h => h.name === uid);
            if (holding) {
                setAvailableHolding(holding.qty);
            }
        })
        .catch(err => console.error("Error fetching holdings for sell window", err));
    }, [uid]);

    const handleSellClick = async () => {
        setError("");
        if (Number(stockQuantity) > availableHolding) {
            setError(`Insufficient holdings! You only own ${availableHolding} shares of ${uid}.`);
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:5175/newOrder", {
                name: uid,
                qty: Number(stockQuantity),
                price: Number(stockPrice),
                mode: "SELL",
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            closeSellWindow();
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || "Error executing sell order.");
        }
    };

    const handleCancelClick = () => {
        closeSellWindow();
    };

    return (
        <div className="sell-container" id="sell-window" draggable="true">
            <div className="sell-header">
                <h3>Sell {uid} <span>(Holding: {availableHolding} Qty)</span></h3>
            </div>
            
            <div className="regular-order">
                {error && <div className="sell-error-alert">{error}</div>}
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                            max={availableHolding}
                            min={1}
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
                            min={0}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Holdings Available: {availableHolding}</span>
                <div>
                    <button className="btn btn-orange" onClick={handleSellClick}>
                        Sell
                    </button>
                    <button className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;
