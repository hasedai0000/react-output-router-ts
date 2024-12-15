import { useTodoContext } from '../../../contexts/TodoContext';
import { CommonButton } from '../../atoms/CommonButton';
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { BaseLayout } from '../../organisms/BaseLayout';
import styles from './styles.module.css';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const [{ title, content }, { handleChangeTitle, handleChangeContent, handleCreateTodo }] = useTodoCreateTemplate({
    addTodo,
  });

  return (
    <BaseLayout title="TodoCreate">
      <form className={styles.container} onSubmit={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm placeholderText={'Title'} inputValue={title} onChange={handleChangeTitle} />
        </div>
        <div className={styles.area}>
          <TextAreaForm placeholderText={'Content'} inputValue={content} onChange={handleChangeContent} />
        </div>
        <div className={styles.area}>
          <CommonButton buttonText="作成" disabled={title === '' || content === ''} />
        </div>
      </form>
    </BaseLayout>
  );
};
