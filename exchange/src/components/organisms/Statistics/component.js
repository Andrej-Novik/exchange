import BlockHeader from "../../moleculs/BlockHeader"
import styles from "./style.module.scss"

const Statistics = ({income, outcome}) => {
	return (
		<div className={styles.content}>
			<BlockHeader title={ "Statistics"}/>
			<div className={styles.income}>
				<div className={styles.statistics}>
					<input type="range" min="0" max="100" value={income} readOnly step="1" />
					<span className="text">Income</span>
				</div>
				<div className={styles.percent}>{income}%</div>
			</div>
			<div className={styles.outcome}>
				<div className={styles.statistics}>
					<input type="range" min="0" max="100" value={outcome} readOnly step="1" />
					<span className="text">Outcome</span>
				</div>
				<div className={styles.percent}>{outcome}%</div>
			</div>
		</div>
	)
}

export default Statistics