import styles from "./style.module.scss"
import bitcoin from "../../../assets/images/coinsIcons/btc.png"

const Coin = ({}) => {
	return (
		<div className={styles.coin}>
			<img src={ bitcoin } alt="coin" />
			<div className={styles.amount}></div>
			<div className={styles.dollars}>$ </div>
		</div>
	)
}

export default Coin