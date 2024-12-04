import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../utils/auth";
import { useSuccessMessage } from "../hooks/useSuccessMessage";

interface LoginProps {
  onLogin: (email: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { message, showMessage } = useSuccessMessage();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authenticateUser(email, password)) {
      onLogin(email);
      showMessage("Login erfolgreich!");
      setTimeout(() => navigate("/"), 3000);
    } else {
      showMessage("Ungültige Anmeldedaten.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {message && <div className="message">{message}</div>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Noch kein Konto? <a href="/register">Registrieren</a>
      </p>
    </div>
  );
};

export default Login;