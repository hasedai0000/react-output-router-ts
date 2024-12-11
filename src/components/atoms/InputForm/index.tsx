import { Dispatch, SetStateAction } from 'react';

import styles from './styles.module.css';

type InputFormProps = {
  disabled?: boolean;
  placeholderText?: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

export const InputForm = ({ disabled = false, placeholderText, inputValue, setInputValue }: InputFormProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholderText}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      disabled={disabled}
    />
  );
};
