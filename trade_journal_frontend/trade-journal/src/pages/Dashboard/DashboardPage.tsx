import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './Overview';
import Trades from './Trades';
import Settings from './Settings';
import styles from './DashboardPage.module.css';

const DashboardPage: React.FC = () => {
  return (
    <div className={styles.dashboardLayout}>
      <main className={styles.content}>
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="trades" element={<Trades />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardPage;