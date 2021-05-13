import Balance from "../../organisms/Balance";
import BankCard from "../../organisms/BankCard";
import Coins from "../../organisms/Coins";
import Statistics from "../../organisms/Statistics";
import Dispatch from "../../organisms/Dispatch";
import styles from "./style.module.scss";

const WalletPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.column}>
        <Balance onlyBalance={true} />
        <BankCard />
      </div>
      <div className={styles.column}>
        <Coins />
      </div>
    </div>
  );
};

export default WalletPage;
