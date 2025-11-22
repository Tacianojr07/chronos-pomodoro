import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableTherme = 'dark' | 'light';

export function Menu() {
  const [therme, setTherme] = useState<AvailableTherme>('dark');

  function handleThermeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //nao segue o link

    setTherme(prevTherme => {
      const nextTherme = prevTherme === 'dark' ? 'light' : 'dark';

      return nextTherme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', therme);

    return () => {
      console.log('parando component');
    };
  }, [therme]);

  return (
    <nav className={styles.menu}>
      <h1>{therme}</h1>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='ir para a Home'
        title='ir para Home'
      >
        <HouseIcon size={60} />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='ver histórico'
      >
        <HistoryIcon size={60} />
      </a>{' '}
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para página de configurações '
        title='Ir para página de configurações'
      >
        <SettingsIcon size={60} />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThermeChange}
      >
        <SunIcon size={60} />
      </a>
    </nav>
  );
}
