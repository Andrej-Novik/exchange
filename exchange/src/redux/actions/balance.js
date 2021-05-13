import {
  ADD_MONEY,
  LOSE_MONEY,
  DEPOSIT_FUNDS,
  WITHDRAW__FUNDS,
  CHANGE_CARD,
} from "../actionTypes/balance";

export const changeMoneyAmount = (amount, price, isBuy) => {
  if (!isBuy) return { type: ADD_MONEY, amount, price };
  else return { type: LOSE_MONEY, amount, price };
};
export const deposit = (newDepositFunds, isDeposit) => {
  return { type: DEPOSIT_FUNDS, newDepositFunds };
};
export const withdraw = (newWithdrawFunds) => {
  return { type: WITHDRAW__FUNDS, newWithdrawFunds };
};
export const changeCard = (newCardNumber) => {
  return { type: CHANGE_CARD, newCardNumber };
};
