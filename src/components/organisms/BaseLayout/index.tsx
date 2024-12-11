import styles from './styles.module.css';
import { Navigation } from '../../molecules/Navigation';

type BaseLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const BaseLayout = ({ title, children }: BaseLayoutProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.common}>
        <Navigation />
      </section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
