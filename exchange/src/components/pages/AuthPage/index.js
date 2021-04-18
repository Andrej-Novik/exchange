import Auth from "../../organisms/Auth";
import styles from "./styles.module.scss";

const AuthPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.column}>
        <Auth />
			</div>
			<div className={styles.column}>
				
			</div>
    </div>
  );
};

export default AuthPage;
