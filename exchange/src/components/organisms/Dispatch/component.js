import Person from "../../moleculs/Person"
import BlockHeader from "../../moleculs/BlockHeader"
import styles from "./style.module.scss"

const Dispatch = ({people}) => {
	return (
		<div className={styles.content}>
			<BlockHeader title={ "New transaction"}/>
			<div className={styles.peoples}>
				{
					people.slice(0, 6).map(person => {
						return (
							<Person
								person={person}
								key={person.id}
							/>
						)
					})
				}
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