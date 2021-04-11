import styles from "./style.module.scss"

const Balance = ({ currentBalance, incomeBalance, outcomeBalance }) => {
	return (
		<div className={styles.balance}>
			<div className={styles.current}>
				<span>{ currentBalance }</span>
				<p className="text">Current balance</p>
			</div>
			<div className={styles.income}>
				<span>$ { incomeBalance }</span>
				<p className="text">Income</p>
			</div>
			<div className={styles.outcome}>
				<span>$ { outcomeBalance }</span>
				<p className="text">Outcome</p>
			</div>
		</div>
	)
}

export default Balance