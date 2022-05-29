import styles from "./styles.module.scss";
import BlockHeader from "../../moleculs/BlockHeader";
import Button from "../../atoms/Button";
import { useState } from "react";
import { useSelector } from "react-redux";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userEmail = useSelector((state) => state.auth.user.email);
  const userPassword = useSelector((state) => state.auth.user.password);

  const submit = () => {
    if (email !== userEmail) {
      setEmail("Неверный email");
    } else if (password !== userPassword) {
      setPassword("Неверный password");
    } else {
      window.location.assign("http://localhost:3000/home");
    }
  };
  return (
    <div className={styles.auth}>
      <BlockHeader title={"Login"} />
      <div className={styles.form}>
        <div className={styles.input}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.input}>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/*<label className={styles.label}>
          <input className={styles.checkbox} type={"checkbox"} />
          <span className={styles.check}></span>
          <span className={styles.remember}>remember me</span>
        </label>*/}
        <div onClick={submit}>
          <Button text={"login"} />
        </div>

        {/*<button onClick={submit}>Login</button>*/}
      </div>
    </div>
  );
};

export default Auth;
