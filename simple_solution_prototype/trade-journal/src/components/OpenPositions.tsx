import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/storage";
import { Trade } from "../types";

const OpenPositions = () => {
  const [positions, setPositions] = useState<Record<string, number>>({});
  const user = localStorage.getItem("currentUser");

  useEffect(() => {
    if (!user) return;

    const trades = getFromLocalStorage<Trade[]>(`${user}_trades`) || [];
    const openPositions: Record<string, number> = {};

    trades.forEach((trade) => {
      if (trade.symbol in openPositions) {
        openPositions[trade.symbol] += trade.quantity;
      } else {
        openPositions[trade.symbol] = trade.quantity;
      }
    });

    setPositions(openPositions);
  }, [user]);

  return (
    <div className="open-positions">
      <h2>Offene Positionen</h2>
      <ul>
        {Object.entries(positions).map(([symbol, quantity]) => (
          <li key={symbol}>
            {symbol} - {quantity} Aktien
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenPositions;