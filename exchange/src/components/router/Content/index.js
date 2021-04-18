import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import CoinsPage from "../../pages/CoinsPage";
import HistoryPage from "../../pages/HistoryPage";
import AuthPage from "../../pages/AuthPage";
import WalletPage from "../../pages/WalletPage";
import styles from "./style.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <Switch>
				<Route exact path="/" render={() => <Redirect to={"/home"} />} />
				<Route path="/login" render={() => <AuthPage />} />
				<Route path="/home" render={() => <Home />} />
        <Route path="/trade" render={() => <CoinsPage />} />
				<Route path="/history" render={() => <HistoryPage />} />
				<Route path="/wallet" render={() => <WalletPage />} />
				<Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  );
};

export default Content;
