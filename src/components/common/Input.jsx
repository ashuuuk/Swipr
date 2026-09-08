import styles from "./Input.module.css";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder=" "
        type={type}
        value={value}
        onChange={onChange}
      />

      <label className={styles.label}>
        {label}
      </label>
    </div>
  );
}