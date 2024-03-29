import { useDispatch, useSelector } from "react-redux";
import BuyCoins from "./component";
import { openModal } from "../../../redux/actions/coins";

const BuyCoinsContainer = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);
  const buttons = useSelector((state) => state.coins.buttons);

  const onOpen = (coinId, buttonType) => {
    dispatch(openModal(coinId, buttonType));
  };
  return <BuyCoins coins={coins} buttons={buttons} onOpen={onOpen} />;
};
export const container = BuyCoinsContainer;
