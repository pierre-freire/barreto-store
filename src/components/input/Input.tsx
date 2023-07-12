import styles from "./input.module.css";

interface IputProps {
  label: string;
  handler: Function;
}

function Input({ label, handler }: IputProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        onChange={(e) => handler(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}

export default Input;
