import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { NAVIGATION_PATH } from '../../../constants/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { INIT_TODO_LIST } from '../../../constants/data';
import { useState } from 'react';

export const TodoTemplate = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className={styles.container}>
      <section className={styles.common}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to={NAVIGATION_PATH.TOP}>Top</Link>
            </li>
            <li className={styles.li}>
              <Link to={NAVIGATION_PATH.CREATE}>Create</Link>
            </li>
          </ul>
        </nav>
      </section>
      <h1 className={styles.title}>TodoList</h1>
      <div className={styles.inner_container}>
        <div className="area">
          <input
            className={styles.input}
            type="text"
            placeholder="Search Keyword"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="area">
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
        </div>
      </div>
    </div>
  );
};
