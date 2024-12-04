import React, { useState } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/storage";

const CapitalForm = () => {
  const [amount, setAmount] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentCapital = getFromLocalStorage<number>("capital") || 0;
    const newCapital = currentCapital + (typeof amount === "number" ? amount : 0);
    saveToLocalStorage("capital", newCapital);
    setAmount("");
    alert("Kapital erfolgreich eingezahlt!");
  };

  return (
    <form className="capital-form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Betrag (€)"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
      />
      <button type="submit">Kapital hinzufügen</button>
    </form>
  );
};

export default CapitalForm;