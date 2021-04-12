import { useSelector } from "react-redux";
import Coins from "./component";

const CoinsContainer = () => {
  const coins = useSelector((state) => state.coins.coins);

  return <Coins coins={coins} />;
};

export const container = CoinsContainer;
