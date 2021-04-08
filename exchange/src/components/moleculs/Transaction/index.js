import styles from "./style.module.scss"
import bitcoin from "../../../assets/images/coinsIcons/btc.png"

const Transaction = ({}) =>  {
	return (
		<div className={styles.transaction}>
			<div className={styles.name}>
				<img src={ bitcoin } alt="img" />
				<span>Bitcoin</span>
			</div>
			<span className={styles.date}>07.03.2021</span>
			<span className={styles.time}>12:00</span>
			<span className={styles.amount}>2 BTS</span>
		</div>
	)
}

export default Transaction