import { v4 as uuidv4 } from "uuid";
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
import bitcoin from "../../assets/images/coinsIcons/btc.png";
import ethereum from "../../assets/images/coinsIcons/eth.png";
import litecoin from "../../assets/images/coinsIcons/lit.png";
import ripple from "../../assets/images/coinsIcons/xrp.jpg";
import bitcoinCash from "../../assets/images/coinsIcons/bch.jpg";

const initialState = {
  isBuyModalOpen: false,
  chosenCoin: {},
  isBuy: true,
  buttons: [
    {
      text: {
        big: "sell",
        small: "-",
      },
      buy: false,
    },
    {
      text: {
        big: "buy",
        small: "+",
      },
      buy: true,
    },
  ],
  coins: [
    {
      id: uuidv4(),
      name: "Bitcoin",
      abbreviation: "BTC",
      amount: 20,
      price: null,
      percent: 9.88,
      img: bitcoin,
    },
    {
      id: uuidv4(),
      name: "Ethereum",
      abbreviation: "ETH",
      amount: 2,
      price: null,
      percent: 7.48,
      img: ethereum,
    },
    {
      id: uuidv4(),
      name: "Litecoin",
      abbreviation: "LIT",
      amount: 8,
      price: null,
      percent: 5.46,
      img: litecoin,
    },
    {
      id: uuidv4(),
      name: "Ripple",
      abbreviation: "XRP",
      amount: 90000,
      price: 0.31,
      percent: 10.28,
      img: ripple,
    },
    {
      id: uuidv4(),
      name: "Bitcoin Cash",
      abbreviation: "BCH",
      amount: 4,
      price: null,
      percent: 4.87,
      img: bitcoinCash,
    },
  ],
};

const balance = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TRADE_MODAL: {
      return {
        ...state,
        chosenCoin: state.coins.find((coin) => coin.id === action.coinId),
        isBuyModalOpen: true,
        isBuy: action.buttonType,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isBuyModalOpen: false,

        chosenCoin: {},
      };
    }
    case BUY_COINS: {
      return {
        ...state,
        coins: state.coins.map((coin) =>
          coin.id === action.coinId
            ? {
                ...coin,
                amount: Number(coin.amount) + Number(action.amount),
              }
            : coin
        ),
        isBuyModalOpen: false,

        chosenCoin: {},
      };
    }
    case SELL_COINS: {
      return {
        ...state,
        coins: state.coins.map((coin) =>
          coin.id === action.coinId
            ? {
                ...coin,
                amount: Number(coin.amount) - Number(action.amount),
              }
            : coin
        ),
        isBuyModalOpen: false,

        chosenCoin: {},
      };
    }
    case SET_BTC: {
      return {
        ...state,
        coins: state.coins.map((coin) =>
          coin.name === "Bitcoin"
            ? {
                ...coin,
                price: action.price,
              }
            : coin
        ),
      };
    }
    case SET_ETH: {
      return {
        ...state,
        coins: state.coins.map((coin) =>
          coin.name === "Ethereum"
            ? {
                ...coin,
                price: action.price,
              }
            : coin
        ),
      };
    }
    case SET_LTC: {
      return {
        ...state,
        coins: state.coins.map((coin) =>
          coin.name === "Litecoin"
            ? {
                ...coin,
                price: action.price,
              }
            : coin
        ),
      };
    }
    case SET_XRP: {
      return {
        ...state,
        coins: state.coins.map((coin) =>
          coin.name === "Ripple"
            ? {
                ...coin,
                price: action.price,
              }
            : coin
        ),
      };
    }
    case SET_BCH: {
      return {
        ...state,
        coins: state.coins.map((coin) =>
          coin.name === "Bitcoin Cash"
            ? {
                ...coin,
                price: action.price,
              }
            : coin
        ),
      };
    }
    default:
      return state;
  }
};

export default balance;
