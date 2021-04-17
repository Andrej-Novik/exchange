import { useSelector } from "react-redux";
import Balance from "./component";

const BalanceContainer = ({onlyBalance}) => {
  const currentBalance = useSelector((state) => state.balance.current);
  const incomeBalance = useSelector((state) => state.balance.income);
  const outcomeBalance = useSelector((state) => state.balance.outcome);

  return (
    <Balance
      currentBalance={currentBalance}
      incomeBalance={incomeBalance}
			outcomeBalance={outcomeBalance}
			onlyBalance={onlyBalance}
    />
  );
};

export const container = BalanceContainer;
