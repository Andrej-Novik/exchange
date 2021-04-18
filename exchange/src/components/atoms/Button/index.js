import styles from "./styles.module.scss";

const Button = ({ text, isRed }) => {
  return (
    <div className={styles.div}>
      <button className={isRed ? styles.buttonRed : styles.button}>
        {text}
      </button>
    </div>
  );
};
export default Button;
