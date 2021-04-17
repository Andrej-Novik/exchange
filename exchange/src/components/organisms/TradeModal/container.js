import { useDispatch, useSelector } from "react-redux";
import { closeModal, tradeCoins } from "../../../redux/actions/coins";
import { changeMoneyAmount } from "../../../redux/actions/balance";
import {newTransaction} from "../../../redux/actions/transactions"
import TradeModal from "./component";

const TradeModalContainer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.coins.isBuyModalOpen);
  const enteredAmount = useSelector((state) => state.coins.enteredAmount);
  const isBuy = useSelector((state) => state.coins.isBuy);
  const chosenCoin = useSelector((state) => state.coins.chosenCoin);

  const onClose = () => {
    dispatch(closeModal());
  };
  const onTrade = ( amount, coinId, price, isBuy, name, abb, img) => {
    dispatch(tradeCoins(amount, coinId, isBuy));
		dispatch(changeMoneyAmount(amount, price, isBuy));
		dispatch(newTransaction(name, abb, amount, isBuy, img))
  };

  return (
    <TradeModal
      isOpen={isOpen}
      enteredAmount={enteredAmount}
      isBuy={isBuy}
      chosenCoin={chosenCoin}
      onClose={onClose}
      onTrade={onTrade}
    />
  );
};

export const container = TradeModalContainer;
