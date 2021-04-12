import { combineReducers } from "redux";
import balance from "./balance";
import coins from "./coins";
import transactions from "./transactions";
import people from "./people";

const reducers = combineReducers({
  balance,
  coins,
  transactions,
  people,
});

export default reducers;
