import BlockHeader from "../../moleculs/BlockHeader";
import BuyCoin from "../../moleculs/BuyCoin";
import styles from "./styles.module.scss";

const BuyCoins = ({ coins }) => {
  return (
    <div className={styles.buy}>
      <BlockHeader title={"Buy or sell your cois"} />
      <div className={styles.coins}>
        {coins.map((coin) => {
          return (
            <BuyCoin
              name={coin.name}
              abb={coin.abbreviation}
              amount={coin.amount}
              price={coin.price}
							img={coin.img}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BuyCoins;
