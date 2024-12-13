import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type NavigationLinkProps = {
  linkPath: string;
  title: string;
};

export const NavigationLink = ({ linkPath, title }: NavigationLinkProps) => {
  return (
    <li className={styles.li}>
      <Link to={linkPath}>{title}</Link>
    </li>
  );
};
