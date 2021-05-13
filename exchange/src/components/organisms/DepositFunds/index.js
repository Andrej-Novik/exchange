import { useState } from "react";
import styles from "./styles.module.scss";

const DepositFunds = ({
  currentBalanbce,
  onClose,
  depositFunds,
  withdrawFunds,
}) => {
  const [newDepositFunds, setNewDepositFunds] = useState("");
  const [newWithdrawFunds, setNewWithdrawFunds] = useState("");

  const onDeposit = () => {
    depositFunds(newDepositFunds);
    setNewDepositFunds("");
  };
  const onWithdraw = () => {
    withdrawFunds(newWithdrawFunds);
    setNewWithdrawFunds("");
  };

  return (
    <div className={styles.depositFunds}>
      <span className={styles.close} onClick={onClose}></span>
      <div className={styles.deposit}>
        <div className={styles.name}>deposit</div>
        <div className={styles.form}>
          <input
            type="number"
            placeholder={"0"}
            value={newDepositFunds}
            onChange={(e) => setNewDepositFunds(e.target.value)}
          />
          <button
            onClick={onDeposit}
            disabled={!Number(newDepositFunds)}
            className={styles.depButton}
          >
            deposit
          </button>
        </div>
      </div>
      <div className={styles.withdraw}>
        <div className={styles.name}>withdraw</div>
        <div className={styles.form}>
          <input
            type="number"
            placeholder={"0"}
            value={newWithdrawFunds}
            onChange={(e) => setNewWithdrawFunds(e.target.value)}
          />
          <button
            className={styles.witButton}
            onClick={onWithdraw}
            disabled={
              !Number(newWithdrawFunds) || newWithdrawFunds > currentBalanbce
            }
          >
            withdraw
          </button>
        </div>
      </div>
    </div>
  );
};
export default DepositFunds;
