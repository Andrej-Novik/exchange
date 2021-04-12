import Balance from "../../moleculs/Balance";
import BlockHeader from "../../moleculs/BlockHeader";
import styles from "./style.module.scss";
import wallet from "../../../assets/images/wallet.jpg";

const Wallet = ({ currentBalance, incomeBalance, outcomeBalance }) => {
  return (
    <div className={styles.wallet}>
      <BlockHeader link={"Go to"} path={"/wallet"} title={"Wallet"} />
      <div className={styles.content}>
        <div className={styles.picture}>
          <img src={wallet} alt="img" />
        </div>
        <Balance
          currentBalance={currentBalance}
          incomeBalance={incomeBalance}
          outcomeBalance={outcomeBalance}
        />
      </div>
    </div>
  );
};

export default Wallet;
