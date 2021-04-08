import Transaction from "../../moleculs/Transaction"
import styles from "./style.module.scss"
import { Link } from "react-router-dom"

const History = ({}) => {
	return (
		<div className={styles.content}>
			<div className="blockHeader">
				<h2>Last transactions</h2>
				<Link to="history" className="link">View all</Link>
			</div>
			<Transaction />
			<Transaction />
			<Transaction />
			<Transaction />
			<Transaction />
		</div>
	)
}

export default History