import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/storage";
import { Trade } from "../types"


const CompletedTrades = () => {
    const [trades, setTrades] = useState<Trade[]>([]);
    const [filter, setFilter] = useState("");
  
    useEffect(() => {
      const data = getFromLocalStorage<Trade[]>("trades");
      setTrades(data || []);
    }, []);
  
    const completedTrades = trades.filter((trade) => trade.quantity === 0);
  
    const filteredTrades = completedTrades.filter((trade) =>
      trade.symbol.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div className="completed-trades">
        <h2>Completed Trades</h2>
        <input
          type="text"
          placeholder="Filter by symbol"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filteredTrades.map((trade, index) => (
            <li key={index}>
              {trade.symbol} - {trade.date} - @ {trade.price} €
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CompletedTrades;  