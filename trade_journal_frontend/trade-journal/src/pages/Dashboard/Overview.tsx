import React from 'react';
import styles from './Overview.module.css';

const Overview: React.FC = () => {
  return (
    <div className={styles.overview}>
      <h1>Dein Trade Journal Konto</h1>
      <p>Hier kannst du deine wichtigsten Trades und Statistiken einsehen.</p>
      <div className={styles.stats}>
        <div className={styles.card}>
          <h2>10%</h2>
          <p>Profit Growth</p>
        </div>
        <div className={styles.card}>
          <h2>5</h2>
          <p>Active Trades</p>
        </div>
        <div className={styles.card}>
          <h2>20%</h2>
          <p>Risk Exposure</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;