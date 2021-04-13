import styles from "./styles.module.scss";

const BuyCoin = ({ name, abb, amount, price, img }) => {
	
  return (
    <div className={styles.coin}>
      <div className={styles.content}>
        <div className={styles.info}>
          <img className={styles.img} src={img} alt="" />
          <div className={styles.coinName}>
            <div className={styles.abb}>{abb}</div>
            <div className={styles.name}>{name}</div>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.sell}>-</div>
          <div className={styles.amount}>{amount}</div>
          <div className={styles.buy}>+</div>
        </div>
        <div className={styles.price}>{price}$</div>
      </div>
    </div>
  );
};
export default BuyCoin;
