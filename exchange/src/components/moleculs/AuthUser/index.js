import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const AuthUser = ({ ava, name }) => {
  return (
    <Link to="/profile" className={styles.profile}>
      <img className={styles.profilePhoto} src={ava} alt="ava" />
			<span>{name}</span>
    </Link>
  );
};
export default AuthUser