import BlockHeader from "../../moleculs/BlockHeader";
import cards from "../../../assets/images/cards.png";
import styles from "./styles.module.scss";
import { useState } from "react";

const ChangeBankCard = ({ changeCardNumber }) => {
  const [newCardNumber, setNewCardNumber] = useState("");
  const [newCardValidityMounth, setNewCardValidityMounth] = useState("");
  const [newCardValidityYear, setNewCardValidityYear] = useState("");
  const [newCardCVV, setNewCardCVV] = useState("");

  const onChangeNumber = () => {
    changeCardNumber(newCardNumber);
    setNewCardNumber("");
  };

  return (
    <div className={styles.changeCard}>
      <BlockHeader title={"Change your card"} />

      <div className={styles.number}>
        <div>Card number</div>
        <div className={styles.img}>
          <input
            type="number"
            placeholder="XXXXXXXXXXXXXXXX"
            value={newCardNumber}
            onChange={(e) => setNewCardNumber(e.target.value)}
          />
          <img src={cards} alt="" />
        </div>
      </div>

      <div className={styles.validity}>
        <div>Validity</div>
        <div className={styles.inputs}>
          <input
            type="number"
            placeholder="M"
            value={newCardValidityMounth}
            onChange={(e) => setNewCardValidityMounth(e.target.value)}
          />
          <span>/</span>
          <input
            type="number"
            placeholder="Y"
            value={newCardValidityYear}
            onChange={(e) => setNewCardValidityYear(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.cvv}>
        <div>CVV</div>
        <input
          type="number"
          placeholder="XXX"
          value={newCardCVV}
          onChange={(e) => setNewCardCVV(e.target.value)}
        />
      </div>

      <button
        className={styles.button}
        onClick={onChangeNumber}
        disabled={
          !newCardNumber ||
          !newCardValidityMounth ||
          !newCardValidityYear ||
					!newCardCVV ||
					String(newCardNumber).length !== 16 ||
					newCardValidityMounth < 0 ||
					newCardValidityMounth > 31 ||
					newCardValidityYear < 0 ||
					String(newCardCVV).length !==3 ||
					String(newCardValidityMounth).length !==2 ||
					String(newCardValidityYear).length !== 2
        }
      >
        Change card
      </button>
    </div>
  );
};
export default ChangeBankCard;
