import styles from "./styles.module.scss";

const AddNewUserModal = ({ isOpen }) => {
  return (
    isOpen && (
      <div className={styles.modal}>
        <form className={styles.form}>
          <span className={styles.close}></span>
          <input type="file" className={styles.file} />
          <input type="text" placeholder="name" className={styles.name} />
          <button className={styles.add}>Add</button>
        </form>
      </div>
    )
  );
};
export default AddNewUserModal;
