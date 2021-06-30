import styles from "./style.module.scss";
import mail from "../../../assets/images/headerIcons/mail.svg";
import bell from "../../../assets/images/headerIcons/bell.svg";
import AuthUser from "../../moleculs/AuthUser";

const Header = ({name, ava}) => {
  return (
    <header className={styles.pageHeader}>
      <h1 className={styles.pageTitle}>WebDad crypto exchange</h1>
      <div className={styles.info}>
        <img className={styles.icon} src={mail} alt="mail" />
        <img className={styles.icon} src={bell} alt="bell" />
				<AuthUser name={name} ava={ava}/>
      </div>
    </header>
  );
};

export default Header;
