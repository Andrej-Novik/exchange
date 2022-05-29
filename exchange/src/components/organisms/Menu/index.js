import { Link } from "react-router-dom";
import MenuLinks from "../MenuLinks";
import styles from "./style.module.scss";
import logo from "../../../assets/images/pageLogo.png";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const params = useLocation();
  return (
    <div className={styles.pageMenu}>
      <div className={styles.menuContent}>
        <Link to="">
          <img src={logo} alt="logo" className={styles.pageLogo} />
        </Link>
        {params.pathname === "/login" ? "" : <MenuLinks />}
      </div>
    </div>
  );
};

export default Menu;
