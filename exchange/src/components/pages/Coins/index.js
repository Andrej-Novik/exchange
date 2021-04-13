import BuyCoins from "../../organisms/BuyCoins";
import Coins from "../../organisms/Coins";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.content}>
			<div className={styles.column}>
				<BuyCoins />
			</div>
      <div className={styles.column}>
        <Coins />
      </div>
    </div>
  );
};

export default Home;
