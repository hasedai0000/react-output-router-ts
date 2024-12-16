import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { BaseLayout } from '../../organisms/BaseLayout';
import styles from './styles.module.css';

export const TodoDetailTemplate = () => {
  return (
    <BaseLayout title="TodoDetail">
      <div className={styles.container}>
        <div className={styles.area}>
          テスト
          {/* <InputForm inputValue={title} disabled={true} /> */}
        </div>
        <div className={styles.area}>
          テスト
          {/* <TextAreaForm inputValue={content} disabled={true} /> */}
        </div>
      </div>
    </BaseLayout>
  );
};
