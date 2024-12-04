import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/storage";
import { Trade } from "../types";


const Analytics = () => {
    const [trades, setTrades] = useState<Trade[]>([]);
    const [analytics, setAnalytics] = useState({
      totalProfit: 0,
      totalLoss: 0,
      averageHoldTime: 0,
    });
  
    useEffect(() => {
      const data = getFromLocalStorage<Trade[]>("trades");
      if (data) {
        setTrades(data);
        // Berechnungen
        let profit = 0;
        let loss = 0;
  
        data.forEach((trade) => {
          const tradeProfit = (trade.price - 10) * trade.quantity; // Beispielwert für Kaufpreis
          if (tradeProfit > 0) {
            profit += tradeProfit;
          } else {
            loss += tradeProfit;
          }
        });
  
        setAnalytics({ totalProfit: profit, totalLoss: loss, averageHoldTime: 5 });
      }
    }, []);
  
    return (
      <div className="analytics">
        <h2>Analytics</h2>
        <p>Total Profit: {analytics.totalProfit} €</p>
        <p>Total Loss: {analytics.totalLoss} €</p>
        <p>Average Hold Time: {analytics.averageHoldTime} days</p>
      </div>
    );
  };
  
  export default Analytics;  