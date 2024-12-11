import styles from './styles.module.css';
import { useState } from 'react';
import { InputForm } from '../../atoms/InputForm';
import { TodoList } from '../../organisms/TodoList';
import { BaseLayout } from '../../organisms/BaseLayout';

export const TodoTemplate = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <BaseLayout title="TodoList">
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm placeholderText={'Serach Word'} inputValue={inputValue} setInputValue={setInputValue} />
        </div>
        <div className={styles.area}>
          <TodoList inputValue={inputValue} />
        </div>
      </div>
    </BaseLayout>
  );
};
