import React, { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";
import DepotChart from "../components/DepotChart";
import CapitalForm from "../components/CapitalForm";
import TradeForm from "../components/TradeForm";
import TradeHistory from "../components/TradeHistory";
import OpenPositions from "../components/OpenPositions";
import { Trade } from "../types";

const DashboardPage = () => {
  const [capital, setCapital] = useState<number>(0);
  const [depotValue, setDepotValue] = useState<number>(0);
  const [labels, setLabels] = useState<string[]>([]);
  const [chartData, setChartData] = useState<number[]>([]);
  const [depotDetails, setDepotDetails] = useState<string[]>([]);
  const [notes, setNotes] = useState<string>("");

  useEffect(() => {
    const storedCapital = getFromLocalStorage<number>("capital") || 0;
    const trades = getFromLocalStorage<Trade[]>("trades") || [];
    const valueBySymbol: Record<string, { quantity: number; price: number }> = {};

    trades.forEach((trade) => {
      if (!valueBySymbol[trade.symbol]) {
        valueBySymbol[trade.symbol] = { quantity: 0, price: 0 };
      }
      valueBySymbol[trade.symbol].quantity += trade.quantity;
      valueBySymbol[trade.symbol].price = trade.price;
    });

    const totalValue = Object.values(valueBySymbol).reduce(
      (acc, { quantity, price }) => acc + quantity * price,
      0
    );

    setCapital(storedCapital);
    setDepotValue(totalValue);
    setDepotDetails(
      Object.entries(valueBySymbol).map(
        ([symbol, { quantity, price }]) => `${quantity} ${symbol} Aktien à ${price.toFixed(2)} €`
      )
    );

    setLabels(["Jan", "Feb", "Mar", "Apr", "May"]);
    setChartData([500, 600, 700, 800, totalValue + storedCapital]);

    const storedNotes = getFromLocalStorage<string>("notes") || "";
    setNotes(storedNotes);
  }, []);

  const handleNoteSave = () => {
    saveToLocalStorage("notes", notes);
    alert("Notizen erfolgreich gespeichert!");
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="depot-overview">
        <h2>Depotübersicht</h2>
        <p><strong>Gesamtkapital:</strong> {capital + depotValue} €</p>
        <p><strong>Eingezahltes Kapital:</strong> {capital} €</p>
        <p><strong>Aktueller Depotwert:</strong> {depotValue} €</p>
        <ul>
          {depotDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <DepotChart labels={labels} data={chartData} />
      <CapitalForm />
      <TradeForm />
      <TradeHistory />
      <OpenPositions />
      <div className="notes-section">
        <h2>Notizen</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Füge deine Notizen hier hinzu..."
        />
        <button onClick={handleNoteSave}>Speichern</button>
      </div>
    </div>
  );
};

export default DashboardPage;