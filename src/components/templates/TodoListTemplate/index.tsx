import styles from './styles.module.css';
import { InputForm } from '../../atoms/InputForm';
import { TodoList } from '../../organisms/TodoList';
import { BaseLayout } from '../../organisms/BaseLayout';
import { useTodoTemplate } from './useTodoTemplate';
import { useTodoContext } from '../../../contexts/TodoContext';

export const TodoListTemplate = () => {
  const { todoList, deleteTodo } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] = useTodoTemplate({ todoList });

  return (
    <BaseLayout title="TodoList">
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm placeholderText={'Serach Word'} inputValue={searchKeyword} onChange={handleChangeSearchKeyword} />
        </div>
        <div className={styles.area}>
          {showTodoList.length > 0 && <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />}
        </div>
      </div>
    </BaseLayout>
  );
};
