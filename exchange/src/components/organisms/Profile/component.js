import styles from "./styles.module.scss";

const Profile = ({
  ava,
  name,
  lastTradeDate,
  lastTradeTime,
  firstTradeDate,
  firstTradeTime,
  tradesNumber,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileContent}>
        <div className={styles.photo}>
          <img src={ava} alt="" />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.first}>
          Your first trade was <span>{firstTradeDate}</span> at{" "}
          <span>{firstTradeTime}</span>
        </div>
        <div className={styles.last}>
          Your last trade was <span>{lastTradeDate}</span> at{" "}
          <span>{lastTradeTime}</span>
        </div>
        <div className={styles.allTrades}>
          There were <span>{tradesNumber}</span> trades in total
        </div>
      </div>
    </div>
  );
};
export default Profile;
