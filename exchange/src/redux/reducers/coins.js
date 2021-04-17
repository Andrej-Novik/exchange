import { v4 as uuidv4 } from "uuid";
import {
  OPEN_MODAL_SELL,
  OPEN_MODAL_BUY,
  CLOSE_MODAL,
  BUY_COINS,
  SELL_COINS,
} from "../actionTypes/coins";
import bitcoin from "../../assets/images/coinsIcons/btc.png";
import ethereum from "../../assets/images/coinsIcons/eth.png";
import litecoin from "../../assets/images/coinsIcons/lit.png";
import ripple from "../../assets/images/coinsIcons/xrp.jpg";
import bitcoinCash from "../../assets/images/coinsIcons/bch.jpg";

const initialState = {
  isBuyModalOpen: false,
  enteredAmount: "",
  chosenCoin: {},
  isBuy: true,
  buttons: [
    {
      id: 1,
      text: {
        big: "sell",
        small: "-",
      },
    },
    {
      id: 2,
      text: {
        big: "buy",
        small: "+",
      },
    },
  ],
  coins: [
    {
      id: uuidv4(),
      name: "Bitcoin",
      abbreviation: "BTC",
      amount: 20,
      price: 52000.33,
      percent: 9.88,
      img: bitcoin,
    },
    {
      id: uuidv4(),
      name: "Ethereum",
      abbreviation: "ETH",
      amount: 2,
      price: 1500.0,
      percent: 7.48,
      img: ethereum,
    },
    {
      id: uuidv4(),
      name: "Litecoin",
      abbreviation: "LIT",
      amount: 8,
      price: 178.57,
      percent: 5.46,
      img: litecoin,
    },
    {
      id: uuidv4(),
      name: "Ripple",
      abbreviation: "XRP",
      amount: 90000,
      price: 0.53,
      percent: 10.28,
      img: ripple,
    },
    {
      id: uuidv4(),
      name: "Bitcoin Cash",
      abbreviation: "BCH",
      amount: 4,
      price: 670.39,
      percent: 4.87,
      img: bitcoinCash,
    },
  ],
};

const balance = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_BUY: {
      return {
        ...state,
        chosenCoin: state.coins.find((coin) => coin.id === action.coinId),
        isBuyModalOpen: true,
        isBuy: true,
      };
    }
    case OPEN_MODAL_SELL: {
      return {
        ...state,
        chosenCoin: state.coins.find((coin) => coin.id === action.coinId),
        isBuyModalOpen: true,
        isBuy: false,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isBuyModalOpen: false,
        enteredAmount: "",
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
                amount: parseInt(coin.amount) + parseInt(action.amount),
              }
            : coin
        ),
        isBuyModalOpen: false,
        enteredAmount: "",
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
                amount: parseInt(coin.amount) - parseInt(action.amount),
              }
            : coin
        ),
        isBuyModalOpen: false,
        enteredAmount: "",
        chosenCoin: {},
      };
    }
    default:
      return state;
  }
};

export default balance;
