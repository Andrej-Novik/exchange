import { combineReducers } from "redux";
import balance from "./balance";
import coins from "./coins";
import transactions from "./transactions";
import people from "./people";
import auth from "./auth";
import notes from "./notes";

const reducers = combineReducers({
  balance,
  coins,
  transactions,
	people,
	auth,
	notes
});

export default reducers;
