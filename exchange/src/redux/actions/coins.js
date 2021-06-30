import {
  OPEN_TRADE_MODAL,
  CLOSE_MODAL,
  BUY_COINS,
  SELL_COINS,
} from "../actionTypes/coins";

export const openModal = ( coinId, buttonType) => {
  return { type: OPEN_TRADE_MODAL, coinId, buttonType };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
export const tradeCoins = (amount, coinId, isBuy) => {
  if (isBuy) return { type: BUY_COINS, amount, coinId };
  else return { type: SELL_COINS, amount, coinId };
};
