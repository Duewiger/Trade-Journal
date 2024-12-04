import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import Login from "./components/Login";
import Register from "./components/Register";
import TradeForm from "./components/TradeForm";
import TradeHistory from "./components/TradeHistory";
import OpenPositions from "./components/OpenPositions";
import Analytics from "./components/Analytics";

const App = () => {
  const [user, setUser] = useState<string | null>(
    localStorage.getItem("currentUser")
  );

  const handleLogin = (email: string) => {
    setUser(email);
    localStorage.setItem("currentUser", email);
  };

  const handleRegister = (email: string) => {
    setUser(email);
    localStorage.setItem("currentUser", email);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/register"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/trade-form" element={<TradeForm />} />
            <Route path="/history" element={<TradeHistory />} />
            <Route path="/positions" element={<OpenPositions />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;