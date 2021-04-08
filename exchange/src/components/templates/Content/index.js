import { Route, Switch } from "react-router-dom"
import styles from "./style.module.scss"
import Home from "../../pages/Home"

const Content = ({}) => {
	return (
		<div className={styles.content}>
			<Switch>
				<Route path="/" exact render={() => <Home />} />
				<Route path="/coins" exact render={() => <div>Coins</div>} />
			</Switch>
		</div>
	)
}

export default Content