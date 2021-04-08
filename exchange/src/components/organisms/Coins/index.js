import styles from "./style.module.scss"
import Coin from "../../moleculs/Coin"
import { Link } from "react-router-dom"

const Coins = ({}) => {
	return (
		<div className={styles.content}>
			<div className="blockHeader">
				<h2>Coins</h2>
				<Link to="coins" className="link">View all</Link>
			</div>
			<div className={styles.coins}>
				<Coin/>
				<Coin/>
				<Coin/>
			</div>
		</div>
	)
}

export default Coins