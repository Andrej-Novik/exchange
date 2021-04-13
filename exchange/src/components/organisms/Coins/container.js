import { useSelector } from "react-redux";
import Coins from "./component";

const CoinsContainer = ({coinsAmount, header, padding}) => {
  const coins = useSelector((state) => state.coins.coins);

	return <Coins coins={coins} coinsAmount={coinsAmount} header={header} padding={ padding }/>;
};

export const container = CoinsContainer;
