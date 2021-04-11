import styles from "./style.module.scss"

const Transaction = ({transaction}) =>  {
	return (
		<div className={styles.transaction}>
			<div className={styles.name}>
				<img src={ transaction.img } alt="img" />
				<span>{transaction.name}</span>
			</div>
			<span className={styles.date}>{transaction.date}</span>
			<span className={styles.time}>{transaction.time}</span>
			<span className={ transaction.buy ? styles.buy : styles.sell}>{transaction.amount} {transaction.abbreviation}</span>
		</div>
	)
}

export default Transaction