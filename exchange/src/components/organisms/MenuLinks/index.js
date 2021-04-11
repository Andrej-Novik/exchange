import { Link } from "react-router-dom"
import styles from "./style.module.scss"

const MenuLinks = () => {
	return (
		<nav className={styles.menuLinks}>
			<Link to="" className={styles.menuLink}>
				Home
			</Link>
			<Link to="coins" className={styles.menuLink}>
				Coins
			</Link>
			<Link to="wallet" className={styles.menuLink}>
				Wallet
			</Link>
			<Link to="history" className={styles.menuLink}>
				History
			</Link>
			<Link to="profile" className={styles.menuLink}>
				Profile
			</Link>
			<Link to="settings" className={styles.menuLink}>
				Settings
			</Link>
		</nav>
	)
}

export default MenuLinks