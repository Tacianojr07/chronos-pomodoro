import { History, House, Settings, Sun, Timer } from 'lucide-react';
import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};
export function Heading({ children }: HeadingProps) {
  return (
    <>
      <div className={styles.header}>
        <Timer color='green' size='55' />
        <h1 className={styles.title}>{children}</h1>
        <div className={styles.objects}>
          <div className={styles.elements}>
            <House color='black' />
          </div>

          <div className={styles.elements}>
            <History color='black' />
          </div>

          <div className={styles.elements}>
            <Settings color='black' />
          </div>

          <div className={styles.elements}>
            <Sun color='black' />
          </div>
        </div>
      </div>
    </>
  );
}
