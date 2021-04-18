import styles from "./styles.module.scss";

const Balance = ({
  currentBalance,
  incomeBalance,
	outcomeBalance,
	onlyBalance
}) => {
  return (
    <div className={styles.balance + " " + (onlyBalance && styles.onlyBalance)}>
      <div className={styles.current}>
        <span>{currentBalance.toFixed(1)}</span>
        <p className="text">Current balance</p>
      </div>
      <div className={styles.income}>
        <span>{incomeBalance.toFixed(1)}</span>
        <p className="text">Income</p>
      </div>
      <div className={styles.outcome}>
        <span>{outcomeBalance.toFixed(1)}</span>
        <p className="text">Outcome</p>
      </div>
    </div>
  );
};

export default Balance;
