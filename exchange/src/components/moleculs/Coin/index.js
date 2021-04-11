import styles from "./style.module.scss"

const Coin = ({ amount, img, price }) => {
	return (
		<div className={styles.coin}>
			<img src={ img } alt="coin" />
			<div className={styles.amount}>{amount}</div>
			<div className={styles.dollars}>$ {price*amount} </div>
		</div>
	)
}

export default Coin