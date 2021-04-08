import styles from "./style.module.scss"

const Statistics = ({}) => {
	return (
		<div className={styles.content}>
			<div className="blockHeader">
				<h2>Statistics</h2>
			</div>
			<div className={styles.income}>
				<div className={styles.statistics}>
					<input type="range" min="0" max="100" value="59" readOnly step="1" />
					<span className="text">Income</span>
				</div>
				<div className={styles.percent}>59%</div>
			</div>
			<div className={styles.outcome}>
				<div className={styles.statistics}>
					<input type="range" min="0" max="100" value="41" readOnly step="1" />
					<span className="text">Outcome</span>
				</div>
				<div className={styles.percent}>41%</div>
			</div>
		</div>
	)
}

export default Statistics