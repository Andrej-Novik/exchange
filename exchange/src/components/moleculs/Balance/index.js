import styles from "./style.module.scss"

const Balance = ({}) => {
	return (
		<div className={styles.balance}>
			<div className={styles.current}>
				<span>{ }</span>
				<p className="text">Current balance</p>
			</div>
			<div className={styles.income}>
				<span>$ {  }</span>
				<p className="text">Income</p>
			</div>
			<div className={styles.outcome}>
				<span>$ {  }</span>
				<p className="text">Outcome</p>
			</div>
		</div>
	)
}

export default Balance