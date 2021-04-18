import { useState } from "react";
import { useSelector } from "react-redux";
import BankCard from "./component";

const BankCardContainer = () => {
	const cardNumber = useSelector((state) => state.balance.cardNumber);
	
	const [isChangeCard, setIsChangeCard] = useState(true)

	const onChangeCard = () => {
		setIsChangeCard(false)
	}
	const onSaveNewCard = () => {
		setIsChangeCard(true)
	}


	return <BankCard cardNumber={cardNumber} isChangeCard={isChangeCard} onChangeCard={onChangeCard} onSaveNewCard={onSaveNewCard}/>;
};
export const container = BankCardContainer;
