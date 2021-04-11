import { v4 as uuidv4 } from 'uuid';
import bitcoin from "../../assets/images/coinsIcons/btc.png"
import ethereum from "../../assets/images/coinsIcons/eth.png"
import litecoin from "../../assets/images/coinsIcons/lit.png"
import ripple from "../../assets/images/coinsIcons/xrp.jpg"
import bitcoinCash from "../../assets/images/coinsIcons/bch.jpg"

const initialState = {
	transactions: [
		{
			id: uuidv4(),
			name: "Litecoin",
			abbreviation: "LIT",
			amount: 7.5,
			date: "21.04.2021",
			time: "13:59",
			img: litecoin,
			buy: true 
		},
		{
			id: uuidv4(),
			name: "Ripple",
			abbreviation: "XRP",
			amount: 890,
			date: "10.04.2021",
			time: "23:13",
			img: ripple,
			buy: false 
		},
		{
			id: uuidv4(),
			name: "Bitcoin",
			abbreviation: "BTC",
			amount: 1,
			date: "07.03.2021",
			time: "12:00",
			img: bitcoin,
			buy: true 
		},
		{
			id: uuidv4(),
			name: "Ethereum",
			abbreviation: "ETH",
			amount: 5.5,
			date: "10.02.2021",
			time: "12:13",
			img: ethereum,
			buy: true 
		},
		{
			id: uuidv4(),
			name: "Bitcoin Cash",
			abbreviation: "BCH",
			amount: 3.15,
			date: "2.01.2021",
			time: "20:15",
			img: bitcoinCash,
			buy: false 
		},
	]
}

const balance = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default balance