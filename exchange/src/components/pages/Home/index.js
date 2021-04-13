import History from "../../organisms/History";
import Coins from "../../organisms/Coins";
import Statistics from "../../organisms/Statistics";
import Dispatch from "../../organisms/Dispatch";
import styles from "./style.module.scss";
import Wallet from "../../organisms/Wallet";

const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.column}>
        <Wallet />
        <History />
      </div>
      <div className={styles.column}>
				<Coins coinsAmount={3} header={true} padding={ true }/>
        <Statistics />
        <Dispatch />
      </div>
    </div>
  );
};

export default Home;
