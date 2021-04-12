import styles from "./style.module.scss";

const Dispatch = ({ person }) => {
  return (
    <div className={styles.person}>
      <img src={person.ava} alt="ava" />
      <span className="text">{person.name}</span>
    </div>
  );
};

export default Dispatch;
