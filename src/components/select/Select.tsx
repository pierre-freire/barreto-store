import styles from "./select.module.css";

interface SelectProps {
  label: string;
}

function Select({ label }: SelectProps) {
  return (
    <div>
      <label>{label}</label>
      <select className={styles.select} name="cars" id="cars">
        <option className={styles.option} value="volvo">
          Volvo
        </option>
        <option className={styles.option} value="saab">
          Saab
        </option>
        <option className={styles.option} value="mercedes">
          Mercedes
        </option>
        <option className={styles.option} value="audi">
          Audi
        </option>
      </select>
    </div>
  );
}

export default Select;
