import { ADD_MONEY, LOSE_MONEY } from "../actionTypes/balance";

const initialState = {
  current: 100000,
  income: 600,
	outcome: 300,
	cardNumber: "1234 **** **** 5678"
};

const balance = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY: {
      return {
        ...state,
        current: Number(state.current) + Number(action.amount * action.price),
        income: Number(state.income) + Number(action.amount * action.price),
      };
    }
    case LOSE_MONEY: {
      return {
        ...state,
        current: Number(state.current) - Number(action.amount * action.price),
        outcome: Number(state.outcome) + Number(action.amount * action.price),
      };
    }
    default:
      return state;
  }
};

export default balance;
