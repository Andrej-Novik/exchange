import Balance from "../../organisms/Balance";
import Coins from "../../organisms/Coins";
import History from "../../organisms/History"
import Statistics from "../../organisms/Statistics";
import Dispatch from "../../organisms/Dispatch";
import styles from "./styles.module.scss";

const HistoryPage = () => {
  return (
    <div className={styles.content}>
			<div className={styles.column}>
				<Balance onlyBalance={ true}/>
				<History />
      </div>
      <div className={styles.column}>
				<Coins />
				<Statistics />
      </div>
    </div>
  );
};

export default HistoryPage;
