import styles from "./button.module.css";

interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return <button className={styles.button}>{label}</button>;
}

export default Button;
