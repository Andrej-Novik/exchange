import Button from "../../atoms/Button";
import styles from "./styles.module.scss";

const AddNewUserModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className={styles.modal}>
        <form className={styles.form}>
          <span className={styles.close} onClick={onClose}></span>
          <input type="file" className={styles.file} />
          <input type="text" placeholder="name" className={styles.name} />
					<Button text={"Add"}/>
        </form>
      </div>
    )
  );
};
export default AddNewUserModal;
