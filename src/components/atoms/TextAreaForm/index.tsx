import styles from './styles.module.css';
import { EventType } from '../../../interfaces/Event';

type TextAreaFormProps = {
  disabled?: boolean;
  placeholderText?: string;
  inputValue: string;
  onChange?: EventType['onChangeTextArea'];
};

export const TextAreaForm = ({ disabled = false, placeholderText, inputValue, onChange }: TextAreaFormProps) => {
  return (
    <textarea
      className={styles.text}
      placeholder={placeholderText}
      value={inputValue}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
