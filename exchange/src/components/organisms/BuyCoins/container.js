import { useSelector } from "react-redux";
import BuyCoins from "./component";

const BuyCoinsContainer = () => {

	const coins = useSelector(state => state.coins.coins)

  return (
		<BuyCoins coins={coins} />
  );
};
export const container = BuyCoinsContainer;
