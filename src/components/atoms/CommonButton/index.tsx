import styles from './styles.module.css';

type CommonButtonProps = {
  disabled?: boolean;
  buttonText: string;
};

export const CommonButton = ({ disabled = false, buttonText }: CommonButtonProps) => {
  return (
    <button className={styles.button} type="submit" disabled={disabled}>
      {buttonText}
    </button>
  );
};
