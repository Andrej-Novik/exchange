import BlockHeader from "../../moleculs/BlockHeader";
import styles from "./styles.module.scss";
import cards from "../../../assets/images/cards.png";
import DepositFunds from "../DepositFunds";
import Button from "../../atoms/Button";

const BankCard = ({ cardNumber, isDeposit, onOpen, onClose }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumber}>
        {cardNumber}
        <div>Your current card</div>
      </div>
      <div className={styles.deposit}>
        {!isDeposit ? (
					<DepositFunds onClose={onClose}/>
        ) : (
          <div className={styles.button} onClick={onOpen}>
            <Button text={"deposit / withdraw funds"} />
          </div>
        )}
      </div>

      <form className={styles.changeCard}>
        <BlockHeader title={"Change your card"} />

        <div className={styles.number}>
          <div>Card number</div>
          <div className={styles.img}>
            <input type="number" placeholder="XXXX XXXX XXXX XXXX" />
            <img src={cards} alt="" />
          </div>
        </div>

        <div className={styles.validity}>
          <div>Validity</div>
          <div className={styles.inputs}>
            <input type="number" placeholder="M" />
            <span>/</span>
            <input type="number" placeholder="Y" />
          </div>
        </div>

        <div className={styles.cvv}>
          <div>CVV</div>
          <input type="number" placeholder="XXX" />
        </div>

        <Button text={"change card"} />
      </form>
    </div>
  );
};
export default BankCard;
