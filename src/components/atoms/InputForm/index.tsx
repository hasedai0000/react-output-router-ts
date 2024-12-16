import styles from './styles.module.css';
import { EventType } from '../../../interfaces/Event';

type InputFormProps = {
  disabled?: boolean;
  placeholderText?: string;
  inputValue: string;
  onChange?: EventType['onChangeInput'];
};

export const InputForm = ({ disabled = false, placeholderText, inputValue, onChange }: InputFormProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholderText}
      value={inputValue}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
