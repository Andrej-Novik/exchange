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
        <span>{currentBalance}</span>
        <p className="text">Current balance</p>
      </div>
      <div className={styles.income}>
        <span>$ {incomeBalance}</span>
        <p className="text">Income</p>
      </div>
      <div className={styles.outcome}>
        <span>$ {outcomeBalance}</span>
        <p className="text">Outcome</p>
      </div>
    </div>
  );
};

export default Balance;
