import {
  OPEN_TRADE_MODAL,
  CLOSE_MODAL,
  BUY_COINS,
  SELL_COINS,
  SET_BTC,
  SET_ETH,
  SET_LTC,
  SET_XRP,
  SET_BCH,
} from "../actionTypes/coins";
import Repository from "../../repository";

export const openModal = (coinId, buttonType) => {
  return { type: OPEN_TRADE_MODAL, coinId, buttonType };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
export const tradeCoins = (amount, coinId, isBuy) => {
  if (isBuy) return { type: BUY_COINS, amount, coinId };
  else return { type: SELL_COINS, amount, coinId };
};
export const setBtcPrice = (price) => {
  return { type: SET_BTC, price };
};
export const setEthPrice = (price) => {
  return { type: SET_ETH, price };
};
export const setLtcPrice = (price) => {
  return { type: SET_LTC, price };
};
export const setXrpPrice = (price) => {
  return { type: SET_ETH, price };
};
export const setBchPrice = (price) => {
  return { type: SET_BCH, price };
};

export const getBtcPriceAPI = () => async (dispatch) => {
  const { value, error } = await Repository.APICore.getBtcPrice();
  if (error || !value) {
    console.log("error");
  } else dispatch(setBtcPrice(value.data.last));
};
export const getEthPriceAPI = () => async (dispatch) => {
  const { value, error } = await Repository.APICore.getEthPrice();
  if (error || !value) {
    console.log("error");
  } else dispatch(setEthPrice(value.data.last));
};
export const getLtcPriceAPI = () => async (dispatch) => {
  const { value, error } = await Repository.APICore.getLtcPrice();
  if (error || !value) {
    console.log("error");
  } else dispatch(setLtcPrice(value.data.last));
};
export const getXrpPriceAPI = () => async (dispatch) => {
  const { value, error } = await Repository.APICore.getXrpPrice();
  if (error || !value) {
    console.log("error");
  } else dispatch(setXrpPrice(value.data.last));
};
export const getBchPriceAPI = () => async (dispatch) => {
  const { value, error } = await Repository.APICore.getBchPrice();
  if (error || !value) {
    console.log("error");
  } else dispatch(setBchPrice(value.data.last));
};
