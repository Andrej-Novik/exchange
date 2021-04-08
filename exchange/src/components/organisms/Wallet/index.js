import styles from "./style.module.scss"
import Balance from "../../moleculs/Balance"
import wallet from "../../../assets/images/wallet.jpg"
import { Link } from "react-router-dom"

const Wallet = ({}) => {
	return (
		<div className={styles.wallet}>
			<div className="blockHeader">
				<h2>Wallet</h2>
				<Link to="wallet" className="link">Go to</Link>
			</div>
			<div className={styles.content}>
				<div className={styles.picture}>
					<img src={ wallet } alt="img"/>
				</div>
				<Balance />
			</div>
		</div>
	)
}

export default Wallet