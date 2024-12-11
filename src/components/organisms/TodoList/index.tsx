import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { INIT_TODO_LIST } from '../../../constants/data';

type TodoListProps = {
  inputValue: string;
};

export const TodoList = ({ inputValue }: TodoListProps) => {
  return (
    <ul className={styles.list}>
      {INIT_TODO_LIST.filter((todo) => {
        const regexp = new RegExp('^' + inputValue, 'i');
        return todo.title.match(regexp);
      }).map((todo) => (
        <li className={styles.todo} key={todo.id}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.inner_area}>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faFile} size="lg" />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faPenToSquare} size="lg" />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faTrashAlt} size="lg" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
