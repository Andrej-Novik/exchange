import Coins from "../../organisms/Coins";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.column}></div>
      <div className={styles.column}>
        <Coins />
      </div>
    </div>
  );
};

export default Home;
