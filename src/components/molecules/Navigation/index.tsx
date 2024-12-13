import styles from './styles.module.css';
import { NAVIGATION_LIST } from '../../../constants/navigation';
import { NavigationLink } from '../../atoms/NavigationLink';

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink linkPath={NAVIGATION_LIST.TOP} title="Top" />
        <NavigationLink linkPath={NAVIGATION_LIST.CREATE} title="Create" />
      </ul>
    </nav>
  );
};
