import Button from "../../atoms/Button";
import styles from "./styles.module.scss";

const DepositFunds = ({ onClose }) => {
  return (
    <div className={styles.depositFunds}>
      <span className={styles.close} onClick={onClose}></span>
      <div className={styles.deposit}>
        <div className={styles.name}>deposit</div>
        <div className={styles.form}>
          <input type="number" placeholder={"0"} />
          <div className={styles.button} onClick={onClose}>
            <Button text={"+"} />
          </div>
        </div>
      </div>
      <div className={styles.withdraw}>
        <div className={styles.name}>withdraw</div>
        <div className={styles.form}>
          <input type="number" placeholder={"0"} />
          <div className={styles.button} onClick={onClose}>
            <Button text={"-"} isRed={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DepositFunds;
