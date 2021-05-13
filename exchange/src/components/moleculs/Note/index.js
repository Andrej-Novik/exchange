import styles from './styles.module.scss'

const Note = ({note, index}) => {
	return (
		<div className={styles.note}>
			{index+1}{")"} {note.text}
		</div>
	)
}
export default Note