import { useState } from "react";
import { useSelector } from "react-redux";
import BankCard from "./component";

const BankCardContainer = () => {
	const cardNumber = useSelector((state) => state.balance.cardNumber);
	
	const [isDeposit, setIsDeposit] = useState(true)

	const onOpen = () => {
		setIsDeposit(false)
	}
	const onClose = () => {
		setIsDeposit(true)
	}


	return <BankCard cardNumber={cardNumber} isDeposit={isDeposit} onOpen={onOpen} onClose={onClose}/>;
};
export const container = BankCardContainer;
