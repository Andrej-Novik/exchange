import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import CoinsPage from "../../pages/CoinsPage";
import styles from "./style.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <Switch>
				<Route path="/" exact render={() => <Home />} />
				<Route path="/trade" exact render={() => <CoinsPage />} />
      </Switch>
    </div>
  );
};

export default Content;
