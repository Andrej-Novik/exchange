import { Link } from "react-router-dom";
import MenuLinks from "../MenuLinks";
import styles from "./style.module.scss";
import logo from "../../../assets/images/pageLogo.png";

const Menu = () => {
  return (
    <div className={styles.pageMenu}>
      <div className={styles.menuContent}>
        <Link to="">
          <img src={logo} alt="logo" className={styles.pageLogo} />
        </Link>
        <MenuLinks />
      </div>
    </div>
  );
};

export default Menu;
