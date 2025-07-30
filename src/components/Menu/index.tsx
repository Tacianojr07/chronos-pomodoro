import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#'>
        <HouseIcon size={60} />
      </a>
      <a className={styles.menuLink} href='#'>
        <HistoryIcon size={60} />
      </a>{' '}
      <a className={styles.menuLink} href='#'>
        <SettingsIcon size={60} />
      </a>
      <a className={styles.menuLink} href='#'>
        <SunIcon size={60} />
      </a>
    </nav>
  );
}
