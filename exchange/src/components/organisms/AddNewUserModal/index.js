import styles from "./styles.module.scss";

const AddNewUserModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className={styles.modal}>
        <form className={styles.form}>
          <span className={styles.close} onClick={onClose}></span>
          <input type="file" className={styles.file} />
          <input type="text" placeholder="name" className={styles.name} />
          <button className={styles.add}>Add</button>
        </form>
      </div>
    )
  );
};
export default AddNewUserModal;
