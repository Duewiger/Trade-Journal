import React from 'react';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
  return (
    <div className={styles.settings}>
      <h1>Einstellungen</h1>
      <p>Hier kannst du deine Benutzereinstellungen anpassen.</p>
      <form>
        <label>
          Benutzername:
          <input type="text" placeholder="Dein Benutzername" />
        </label>
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
};

export default Settings;