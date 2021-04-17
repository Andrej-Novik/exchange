import styles from "./styles.module.scss";

const BuyCoin = ({ coin, buttons, onOpen }) => {
  return (
    <div className={styles.coin}>
      <div className={styles.content}>
        <div className={styles.info}>
          <img className={styles.img} src={coin.img} alt="" />
          <div className={styles.coinName}>
            <div className={styles.abb}>{coin.abbreviation}</div>
            <div className={styles.name}>{coin.name}</div>
          </div>
        </div>

        <div className={styles.action}>
          <div
            className={styles.sell}
            onClick={() => onOpen(buttons[0].id, coin.id)}
          >
            <div className={styles.bigW}>{buttons[0].text.big}</div>
            <div className={styles.smallW}>{buttons[0].text.small}</div>
          </div>

          <div className={styles.amount}>{coin.amount}</div>

					<div
						className={styles.buy}
						onClick={() => onOpen(buttons[1].id, coin.id)}
					>
            <div className={styles.bigW}>{buttons[1].text.big}</div>
            <div className={styles.smallW}>{buttons[1].text.small}</div>
          </div>
        </div>

        <div className={styles.price}>{coin.price}$</div>
      </div>
    </div>
  );
};
export default BuyCoin;
