import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <h1 className={styles.logo}>Trade Journal</h1>
      <ul>
        <li>
          <NavLink 
            to="/dashboard/overview" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/dashboard/trades" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Trades
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/dashboard/settings" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;