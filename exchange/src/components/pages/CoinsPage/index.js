import Dispatch from "../../organisms/Dispatch";
import Balance from "../../organisms/Balance";
import BuyCoins from "../../organisms/BuyCoins";
import Coins from "../../organisms/Coins";
import Statistics from "../../organisms/Statistics";
import styles from "./styles.module.scss";

const CoinsPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.column}>
				<Balance onlyBalance={true}/>
        <BuyCoins />
      </div>
      <div className={styles.column}>
        <Coins />
				<Statistics />
				<Dispatch />
      </div>
    </div>
  );
};

export default CoinsPage;
