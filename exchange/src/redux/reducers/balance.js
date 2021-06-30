import {
  ADD_MONEY,
  LOSE_MONEY,
  DEPOSIT_FUNDS,
  WITHDRAW__FUNDS,
  CHANGE_CARD,
} from "../actionTypes/balance";

const initialState = {
  current: 100000,
  income: 600,
  outcome: 300,
  cardNumber: "1234 **** **** 5678",
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
    case DEPOSIT_FUNDS: {
      return {
        ...state,
        current: Number(state.current) + Number(action.newDepositFunds),
      };
    }
    case WITHDRAW__FUNDS: {
      return {
        ...state,
        current: Number(state.current) - Number(action.newWithdrawFunds),
      };
    }
    case CHANGE_CARD: {
      return {
        ...state,
        cardNumber: workWithCardNumber(action.newCardNumber),
      };
    }

    default:
      return state;
  }
};

const workWithCardNumber = (number) => {
  number = String(number);
  let result = [];
  for (let i = 0; i < 16; i++) {
    if (i === 4 || i === 8 || i === 12) {
      result.push(" ");
    }
    if (i > 3 && i < 12) {
      result.push("*");
    } else {
      result.push(number[i]);
    }
  }
  return result;
};

export default balance;
