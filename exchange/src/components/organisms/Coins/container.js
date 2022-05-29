import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Coins from "./component";
import {
  getBtcPriceAPI,
  getEthPriceAPI,
  getLtcPriceAPI,
  getXrpPriceAPI,
  getBchPriceAPI,
} from "../../../redux/actions/coins";

const CoinsContainer = ({ coinsAmount, header, padding }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      dispatch(getBtcPriceAPI());
      dispatch(getEthPriceAPI());
      dispatch(getLtcPriceAPI());
      dispatch(getBchPriceAPI());
      //dispatch(getXrpPriceAPI());
    }, 5000);
  }, []);
  const coins = useSelector((state) => state.coins.coins);

  return (
    <Coins
      coins={coins}
      coinsAmount={coinsAmount}
      header={header}
      padding={padding}
    />
  );
};

export const container = CoinsContainer;
