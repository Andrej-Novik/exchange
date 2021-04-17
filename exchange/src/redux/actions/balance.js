import { ADD_MONEY, LOSE_MONEY } from "../actionTypes/balance";

export const changeMoneyAmount = (amount, price, isBuy) => {
  if (!isBuy) return { type: ADD_MONEY, amount, price };
  else return { type: LOSE_MONEY, amount, price };
};
