import styles from "./input.module.css";

interface IputProps {
  label: string;
  type?: string;
  handler: Function;
}

function Input({ label, type = "text", handler }: IputProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        onChange={(e) => handler(e.target.value)}
        className={styles.input}
        type={type}
      />
    </div>
  );
}

export default Input;
