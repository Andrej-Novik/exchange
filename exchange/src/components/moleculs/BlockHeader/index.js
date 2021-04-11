import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

const BlockHeader = ({title, text, path}) => {
	return (
		<div className={styles.header}>
			<h2 className={styles.title}>
				{title}
			</h2>
			{ text && <Link to={path} className={styles.link}>{text}</Link>}
		</div>
	)
}

export default BlockHeader