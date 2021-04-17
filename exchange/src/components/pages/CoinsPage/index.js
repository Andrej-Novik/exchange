import BuyCoins from "../../organisms/BuyCoins";
import Coins from "../../organisms/Coins";
import Statistics from "../../organisms/Statistics";
import styles from "./styles.module.scss";

const CoinsPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.column}>
        <BuyCoins />
      </div>
      <div className={styles.column}>
        <Coins />
        <Statistics />
      </div>
    </div>
  );
};

export default CoinsPage;
