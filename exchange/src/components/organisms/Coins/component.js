import BlockHeader from "../../moleculs/BlockHeader";
import Coin from "../../moleculs/Coin";

import styles from "./style.module.scss";

const Coins = ({ coins, coinsAmount, header, padding }) => {
  return (
    <div className={styles.content + " " + (padding && styles.padding)}>
			{header && <BlockHeader link={"View all"} path={"/trade"} title={"Coins"} />}
      <div className={styles.coins}>
        {coins.slice(0, coinsAmount).map((coin) => {
          return (
            <Coin
              amount={coin.amount}
              img={coin.img}
              price={coin.price}
              key={coin.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
