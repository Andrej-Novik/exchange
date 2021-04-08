import styles from "./style.module.scss"
import mail from "../../../assets/images/headerIcons/mail.svg"
import bell from "../../../assets/images/headerIcons/bell.svg"
import avatar from "../../../assets/images/headerIcons/avatar.png"

const Header = ({}) => {
	return (
		<header className={styles.pageHeader}>
			<h1 className={styles.pageTitle}>WebDad crypto exchange</h1>
			<div className={styles.info}>
				<img className={styles.icon} src={ mail } alt="mail" />
				<img className={styles.icon} src={ bell } alt="bell" />
				<div className={styles.profile}>
					<img className={styles.profilePhoto} src={ avatar } alt="avatar" />
					<span>Andrej</span>
				</div>
			</div>
		</header>
	)
}

export default Header