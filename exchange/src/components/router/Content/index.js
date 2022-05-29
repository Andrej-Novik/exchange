import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import CoinsPage from "../../pages/CoinsPage";
import HistoryPage from "../../pages/HistoryPage";
import AuthPage from "../../pages/AuthPage";
import WalletPage from "../../pages/WalletPage";
import ProfilePage from "../../pages/ProfilePage";
import styles from "./style.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <Switch>
				<Route exact path="/" render={() => <Redirect to={"/login"} />} />
				<Route path="/login" render={() => <AuthPage />} />
				<Route path="/home" render={() => <Home />} />
        <Route path="/trade" render={() => <CoinsPage />} />
				<Route path="/history" render={() => <HistoryPage />} />
				<Route path="/wallet" render={() => <WalletPage />} />
				<Route path="/profile" render={() => <ProfilePage />} />
				<Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  );
};

export default Content;
