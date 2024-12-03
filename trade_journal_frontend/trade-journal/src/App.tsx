import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DashboardPage from './pages/Dashboard/DashboardPage';
import LoginPage from './pages/Login/LoginPage';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.appLayout}>
        {/* Sidebar */}
        <NavigationBar />

        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;