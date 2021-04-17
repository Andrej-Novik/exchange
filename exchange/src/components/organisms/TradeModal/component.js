import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const TradeModal = ({
  isOpen,
  isBuy,
  enteredAmount,
  chosenCoin,
  onClose,
  onTrade,
}) => {
  let [newEnteredAmount, setNewEnteredAmount] = useState(enteredAmount);

  useEffect(() => {
    setNewEnteredAmount(enteredAmount);
  }, [enteredAmount]);

  return (
    isOpen && (
      <div className={styles.modal}>
        <div className={isBuy ? styles.formBuy : styles.formSell}>
          <span className={styles.close} onClick={onClose}></span>
          <input
            className={styles.input}
            value={newEnteredAmount}
            type="number"
            placeholder="0"
            onChange={(e) => {
              setNewEnteredAmount(e.target.value);
            }}
          />
          {isBuy ? (
            <button
              disabled={newEnteredAmount === enteredAmount}
              className={styles.buy}
              onClick={() =>
                onTrade(
                  newEnteredAmount,
                  chosenCoin.id,
                  chosenCoin.price,
                  isBuy
                )
              }
            >
              buy
            </button>
          ) : (
            <button
              disabled={newEnteredAmount === enteredAmount}
              className={styles.sell}
              onClick={() =>
                onTrade(
                  newEnteredAmount,
                  chosenCoin.id,
                  chosenCoin.price,
                  isBuy
                )
              }
            >
              sell
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default TradeModal;
