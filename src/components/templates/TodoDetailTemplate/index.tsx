import { useParams } from 'react-router-dom';
import { useTodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { BaseLayout } from '../../organisms/BaseLayout';
import styles from './styles.module.css';

export const TodoDetailTemplate = () => {
  const { todoList } = useTodoContext();
  const { id } = useParams();
  const todo = todoList.find((todo) => String(todo.id) === id);

  return (
    <BaseLayout title="TodoDetail">
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm inputValue={todo.title} disabled={true} />
          </div>
          <div className={styles.area}>
            <TextAreaForm inputValue={todo.content} disabled={true} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
