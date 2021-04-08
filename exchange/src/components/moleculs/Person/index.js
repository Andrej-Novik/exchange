import styles from "./style.module.scss"
import person from "../../../assets/images/headerIcons/avatar.png"

const Dispatch = () => {
	return (
		<div className={styles.person}>
			<img src={ person } alt="ava" />
			<span className="text">{ }</span>
		</div>
	)
}

export default Dispatch