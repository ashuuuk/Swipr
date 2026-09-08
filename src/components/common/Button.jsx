import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        variant === "secondary"
          ? `${styles.button} ${styles.secondary}`
          : styles.button
      }
    >
      {children}
    </button>
  );
}