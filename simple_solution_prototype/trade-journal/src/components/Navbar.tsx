import { Link } from "react-router-dom";
import { useSuccessMessage } from "../hooks/useSuccessMessage";

interface NavbarProps {
  user: string | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const { message, showMessage } = useSuccessMessage();

  const handleLogout = () => {
    onLogout();
    showMessage("Logout erfolgreich!");
  };

  return (
    <nav className="navbar">
    {message && <div className="message">{message}</div>}
    <ul>
        <li>
        <Link to="/">Dashboard</Link>
        </li>
        {user ? (
        <>
            <li>
            <button onClick={handleLogout}>Logout</button>
            </li>
        </>
        ) : (
        <>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/register">Registrierung</Link>
            </li>
        </>
        )}
    </ul>
    </nav>
  );
};

export default Navbar;