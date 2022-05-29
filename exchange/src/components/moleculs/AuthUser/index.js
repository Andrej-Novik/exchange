import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

const AuthUser = ({ ava, name }) => {
  const params = useLocation();
  return (
    <>
      {params.pathname === "/login" ? (
        ""
      ) : (
        <Link to="/profile" className={styles.profile}>
          <img className={styles.profilePhoto} src={ava} alt="ava" />
          <span>{name}</span>
        </Link>
      )}
    </>
  );
};
export default AuthUser;
