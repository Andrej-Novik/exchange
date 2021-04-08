import styles from "./style.module.scss"
import Wallet from "../../organisms/Wallet"
import History from "../../organisms/History"
import Coins from "../../organisms/Coins"
import Statistics from "../../organisms/Statistics"
import Dispatch from "../../organisms/Dispatch"

const Home = ({}) => {
	return (
		<div className={styles.content}>
			<div className={styles.column}>
				<Wallet />
				<History />
			</div>
			<div className={styles.column}>
				<Coins />
				<Statistics />
				<Dispatch />
			</div>
		</div>
	)
}

export default Home