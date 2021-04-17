import {
  OPEN_MODAL_SELL,
  OPEN_MODAL_BUY,
  CLOSE_MODAL,
  BUY_COINS,
  SELL_COINS,
} from "../actionTypes/coins";

export const openModal = (buttonId, coinId) => {
  if (buttonId === 1) return { type: OPEN_MODAL_SELL, coinId };
  else return { type: OPEN_MODAL_BUY, coinId };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
export const tradeCoins = (amount, coinId, isBuy) => {
  if (isBuy) return { type: BUY_COINS, amount, coinId };
  else return { type: SELL_COINS, amount, coinId };
};
