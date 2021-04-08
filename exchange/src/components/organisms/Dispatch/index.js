import styles from "./style.module.scss"
import Person from "../../moleculs/Person"

const Dispatch = ({}) => {
	return (
		<div className={styles.content}>
			<div className="blockHeader">
				<h2>New transaction</h2>
			</div>
			<div className={styles.peoples}>
				<Person />
				<Person />
				<Person />
				<Person />
				<Person />
				<div className={styles.add}>+</div>
			</div>
			<form>
				<input type="text" placeholder="0"/>
				<button className={styles.send}>Send the transfer</button>
			</form>
		</div>
	)
}

export default Dispatch