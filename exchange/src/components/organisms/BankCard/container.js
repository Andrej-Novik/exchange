import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, changeCard } from "../../../redux/actions/balance";
import BankCard from "./component";

const BankCardContainer = () => {
  const dispatch = useDispatch();
	const cardNumber = useSelector((state) => state.balance.cardNumber);
	const currentBalanbce = useSelector((state) => state.balance.current);

  const [isDeposit, setIsDeposit] = useState(true);

  const onOpen = () => {
    setIsDeposit(false);
  };
  const onClose = () => {
    setIsDeposit(true);
  };
  const depositFunds = (newDepositFunds) => {
    dispatch(deposit(newDepositFunds));
    setIsDeposit(true);
	};
	const withdrawFunds = (newWithdrawFunds) => {
    dispatch(withdraw(newWithdrawFunds));
    setIsDeposit(true);
	};
	const changeCardNumber = (newCardNumber) => {
		dispatch(changeCard(newCardNumber))
	}

  return (
    <BankCard
      cardNumber={cardNumber}
			isDeposit={isDeposit}
			currentBalanbce={currentBalanbce}
      onOpen={onOpen}
      onClose={onClose}
			depositFunds={depositFunds}
			withdrawFunds={withdrawFunds}
			changeCardNumber={changeCardNumber}
    />
  );
};
export const container = BankCardContainer;
