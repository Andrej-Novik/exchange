import styles from "./style.module.scss";

const Coin = ({ amount, img, price }) => {
  return (
    <div className={styles.coin}>
      <div className={styles.content}>
        <img src={img} alt="coin" />
        <div className={styles.amount}>{amount}</div>
        <div className={styles.dollars}>
          ${" "}
          {price * amount > 1000000
            ? (price * amount).toFixed(0)
            : (price * amount).toFixed(1)}{" "}
        </div>
      </div>
    </div>
  );
};

export default Coin;
