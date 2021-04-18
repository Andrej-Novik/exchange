import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const TradeModal = ({
  isOpen,
  isBuy,
  enteredAmount,
  chosenCoin,
  currentBalance,
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
            <div>
              <button
                disabled={
                  newEnteredAmount === enteredAmount ||
                  newEnteredAmount * chosenCoin.price > currentBalance ||
                  newEnteredAmount < 0.001 ||
                  newEnteredAmount > 1000
                }
                className={styles.buy}
                onClick={() =>
                  onTrade(
                    newEnteredAmount,
                    chosenCoin.id,
                    chosenCoin.price,
                    isBuy,
                    chosenCoin.name,
                    chosenCoin.abbreviation,
                    chosenCoin.img
                  )
                }
              >
                buy
              </button>
            </div>
          ) : (
            <div>
              <button
                disabled={
                  newEnteredAmount === enteredAmount ||
                  newEnteredAmount > chosenCoin.amount ||
                  newEnteredAmount < 0.001 ||
                  newEnteredAmount > 1000
                }
                className={styles.sell}
                onClick={() =>
                  onTrade(
                    newEnteredAmount,
                    chosenCoin.id,
                    chosenCoin.price,
                    isBuy,
                    chosenCoin.name,
                    chosenCoin.abbreviation,
                    chosenCoin.img
                  )
                }
              >
                sell
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default TradeModal;
