import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";

const MenuLinks = () => {
  return (
		<nav className={styles.menuLinks}>
      <NavLink to="/home" className={styles.menuLink} activeClassName={styles.activeLink}>
        Home
      </NavLink>
      <NavLink to="/trade" className={styles.menuLink} activeClassName={styles.activeLink}>
        Trade
      </NavLink>
      <NavLink to="/wallet" className={styles.menuLink} activeClassName={styles.activeLink}>
        Wallet
      </NavLink>
      <NavLink to="/history" className={styles.menuLink} activeClassName={styles.activeLink}>
        History
      </NavLink>
      <NavLink to="/profile" className={styles.menuLink} activeClassName={styles.activeLink}>
        Profile
      </NavLink>
      <NavLink to="/settings" className={styles.menuLink} activeClassName={styles.activeLink}>
        Settings
      </NavLink>
    </nav>
  );
};

export default MenuLinks;
