import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Coins from "../../pages/Coins";
import styles from "./style.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <Switch>
				<Route path="/" exact render={() => <Home />} />
				<Route path="/coins" exact render={() => <Coins />} />
      </Switch>
    </div>
  );
};

export default Content;
