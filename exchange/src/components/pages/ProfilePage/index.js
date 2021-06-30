import Notes from "../../organisms/Notes";
import Profile from "../../organisms/Profile";
import styles from "./style.module.scss";

const ProfilePage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.column}>
        <Profile />
      </div>
      <div className={styles.column}>
        <Notes />
      </div>
    </div>
  );
};

export default ProfilePage;
