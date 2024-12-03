import React from 'react';
import styles from './Trades.module.css';

const Trades: React.FC = () => {
  return (
    <div className={styles.trades}>
      <h1>Trades Übersicht</h1>
      <p>Hier findest du eine Liste deiner letzten Trades.</p>
      <ul className={styles.tradeList}>
        <li>Trade 1 - Gewinn: +10%</li>
        <li>Trade 2 - Verlust: -5%</li>
        <li>Trade 3 - Gewinn: +15%</li>
      </ul>
    </div>
  );
};

export default Trades;