import styles from "./styles.module.scss";
import DepositFunds from "../DepositFunds";
import Button from "../../atoms/Button";
import ChangeBankCard from "../ChangeBankCard";

const BankCard = ({
  cardNumber,
  isDeposit,
  currentBalanbce,
  onOpen,
  onClose,
  depositFunds,
	withdrawFunds,
	changeCardNumber
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumber}>
        {cardNumber}
        <div>Your current card</div>
      </div>
      <div className={styles.deposit}>
        {!isDeposit ? (
          <DepositFunds
            currentBalanbce={currentBalanbce}
            onClose={onClose}
            depositFunds={depositFunds}
            withdrawFunds={withdrawFunds}
          />
        ) : (
          <div className={styles.button} onClick={onOpen}>
            <Button text={"deposit / withdraw funds"} />
          </div>
        )}
      </div>
			<ChangeBankCard changeCardNumber={ changeCardNumber}/>
      
    </div>
  );
};
export default BankCard;
