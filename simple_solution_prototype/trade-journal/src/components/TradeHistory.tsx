import React, { useState, useEffect } from "react";
import { getFromLocalStorage } from "../utils/storage";
import { Trade } from "../types";

const TradeHistory = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) return;

    const storedTrades = getFromLocalStorage<Trade[]>(`${user}_trades`) || [];
    setTrades(storedTrades);
  }, []);

  const filteredTrades = trades.filter((trade) =>
    trade.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="trade-history">
      <h2>Handelsverlauf</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Nach Aktien filtern..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {filteredTrades.map((trade, index) => (
          <li key={index}>
            {trade.symbol} - {trade.quantity} Stück @{" "}
            {trade.price.toFixed(2).replace(".", ",")} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradeHistory;