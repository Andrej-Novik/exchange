import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const BlockHeader = ({ title, link, path }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {link && (
        <Link to={path} className={styles.link}>
          {link}
        </Link>
      )}
    </div>
  );
};

export default BlockHeader;
