import BlockHeader from "../../moleculs/BlockHeader";
import styles from "./styles.module.scss";
import cards from "../../../assets/images/cards.png";

const BankCard = ({ cardNumber }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumber}>
        {cardNumber}
        <div>Your current card</div>
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
        <button className={styles.button}>Сhange card</button>
      </form>
    </div>
  );
};
export default BankCard;
