import styles from "./styles.module.scss";

import BlockHeader from "../../moleculs/BlockHeader";

const Auth = () => {
  return (
    <div className={styles.auth}>
      <BlockHeader title={"Login"} />
      <form className={styles.form}>
        <div className={styles.input}>
          <input placeholder="Email" />
        </div>
        <div className={styles.input}>
          <input placeholder="Password" type="password" />
        </div>
        <label className={styles.label}>
					<input className={styles.checkbox} type={"checkbox"} />
					<span className={styles.check}></span>
          <span className={styles.remember}>remember me</span>
        </label>
        <div className={styles.button}>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
