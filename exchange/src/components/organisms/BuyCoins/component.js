import BlockHeader from "../../moleculs/BlockHeader";
import BuyCoin from "../../moleculs/BuyCoin";
import TradeModal from "../TradeModal";
import styles from "./styles.module.scss";

const BuyCoins = ({ coins, buttons, onOpen }) => {
  return (
    <div className={styles.buy}>
      <BlockHeader title={"Trade "} />
      <div className={styles.coins}>
        {coins.map((coin) => {
          return (
            <BuyCoin
							coin={coin}
							buttons={buttons}
							onOpen={onOpen}
							key={coin.id}
            />
          );
        })}
			</div>
			<TradeModal />
    </div>
  );
};
export default BuyCoins;
