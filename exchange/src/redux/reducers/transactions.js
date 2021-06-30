import { v4 as uuidv4 } from "uuid";
import bitcoin from "../../assets/images/coinsIcons/btc.png";
import ethereum from "../../assets/images/coinsIcons/eth.png";
import litecoin from "../../assets/images/coinsIcons/lit.png";
import ripple from "../../assets/images/coinsIcons/xrp.jpg";
import bitcoinCash from "../../assets/images/coinsIcons/bch.jpg";
import { NEW_TRANSACTION } from "../actionTypes/transactions";

const initialState = {
  transactions: [
    {
      id: uuidv4(),
      name: "Litecoin",
      abbreviation: "LIT",
      amount: 7.5,
      date: "21.03.2020",
      time: "13:59:54",
      img: litecoin,
      isBuy: true,
    },
    {
      id: uuidv4(),
      name: "Ripple",
      abbreviation: "XRP",
      amount: 890,
      date: "10.04.2020",
      time: "23:13:23",
      img: ripple,
      isBuy: false,
    },
    {
      id: uuidv4(),
      name: "Bitcoin",
      abbreviation: "BTC",
      amount: 1,
      date: "07.07.2020",
      time: "12:00:48",
      img: bitcoin,
      isBuy: true,
    },
    {
      id: uuidv4(),
      name: "Ethereum",
      abbreviation: "ETH",
      amount: 5.5,
      date: "10.08.2020",
      time: "12:13:00",
      img: ethereum,
      isBuy: true,
    },
    {
      id: uuidv4(),
      name: "Bitcoin Cash",
      abbreviation: "BCH",
      amount: 3.15,
      date: "2.01.2021",
      time: "20:15:23",
      img: bitcoinCash,
      isBuy: false,
    },
  ],
};

const balance = (state = initialState, action) => {
  switch (action.type) {
		case NEW_TRANSACTION: {
			let date = new Date();
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: uuidv4(),
            name: action.name,
            abbreviation: action.abbreviation,
						amount: action.amount,
						date: date.toLocaleDateString(),
						time: date.toLocaleTimeString(),
						img: action.img,
						isBuy: action.isBuy
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default balance;
