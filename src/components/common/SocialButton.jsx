import styles from "./SocialButton.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function SocialButton({
  icon,
  children,
  onClick,
}) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      <div className={styles.icon}>
        {icon}
      </div>

      {children}

      <div className={styles.arrow}>
        <FaArrowRight size={14} />
      </div>
    </button>
  );
}