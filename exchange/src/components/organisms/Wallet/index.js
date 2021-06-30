import Balance from "../../organisms/Balance";
import BlockHeader from "../../moleculs/BlockHeader";
import styles from "./styles.module.scss";
import wallet from "../../../assets/images/wallet.jpg";

const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <BlockHeader link={"Go to"} path={"/wallet"} title={"Wallet"} />
      <div className={styles.content}>
        <div className={styles.picture}>
          <img src={wallet} alt="img" />
        </div>
        <Balance />
      </div>
    </div>
  );
};

export default Wallet;
