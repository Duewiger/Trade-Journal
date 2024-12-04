import { useState } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/storage";
import { Trade } from "../types";

const TradeForm = () => {
    const [trade, setTrade] = useState<Trade>({
        symbol: "",
        date: new Date().toISOString().split("T")[0],
        quantity: 0,
        price: 0,
        note: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTrade({
            ...trade,
            [name]: name === "quantity" || name === "price" ? Number(value) : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user = localStorage.getItem("currentUser");
        if (!user) return;

        const newTrade = {
            ...trade,
            quantity: trade.quantity || 0,
            price: trade.price || 0,
        };

        const trades = getFromLocalStorage<Trade[]>(`${user}_trades`) || [];
        saveToLocalStorage(`${user}_trades`, [...trades, newTrade]);
        setTrade({ symbol: "", date: new Date().toISOString().split("T")[0], quantity: 0, price: 0, note: "" });
    };

    return (
        <form className="trade-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="symbol"
                placeholder="Aktiensymbol"
                value={trade.symbol}
                onChange={handleInputChange}
                required
            />
            <input
                type="date"
                name="date"
                value={trade.date}
                onChange={handleInputChange}
                required
            />
            <input
                type="number"
                name="quantity"
                placeholder="Anzahl"
                value={trade.quantity === 0 ? "" : trade.quantity}
                onChange={handleInputChange}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Preis (€)"
                value={trade.price === 0 ? "" : trade.price}
                onChange={handleInputChange}
                required
            />
            <textarea
                name="note"
                placeholder="Notizen hinzufügen"
                value={trade.note}
                onChange={handleInputChange}
            />
            <button type="submit">Trade hinzufügen</button>
        </form>
    );
};

export default TradeForm;