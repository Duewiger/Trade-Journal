import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserToLocalStorage, getUsersFromLocalStorage } from "../utils/auth";
import { useSuccessMessage } from "../hooks/useSuccessMessage";

interface RegisterProps {
  onRegister: (email: string) => void;
}

const Register = ({ onRegister }: RegisterProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { message, showMessage } = useSuccessMessage();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showMessage("Passwörter stimmen nicht überein.");
      return;
    }

    const existingUsers = getUsersFromLocalStorage();
    if (existingUsers.some((user) => user.email === email)) {
      showMessage("Email bereits registriert.");
      return;
    }

    saveUserToLocalStorage({ email, password });
    onRegister(email);
    showMessage("Registrierung erfolgreich!");
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="auth-container">
      <h2>Registrieren</h2>
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
        <input
          type="password"
          placeholder="Passwort bestätigen"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Registrieren</button>
      </form>
      <p>
        Bereits ein Konto? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;