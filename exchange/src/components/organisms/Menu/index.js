import styles from "./style.module.scss"
import MenuLinks from "../MenuLinks"
import logo from "../../../assets/images/pageLogo.png"

const Menu = ({}) => {
	return (
		<div className={styles.pageMenu}>
			<div className={styles.menuContent}>
				<img src={ logo } alt="logo" className={styles.pageLogo} />
				<MenuLinks />
			</div>
		</div>
	)
}

export default Menu