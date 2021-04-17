import History from "./component";
import { useSelector } from "react-redux";

const HistoryContainer = ({ transactionsAmount, header }) => {
  const transactions = useSelector((state) => state.transactions.transactions);

  return (
    <History
      transactions={transactions}
      transactionsAmount={transactionsAmount}
      header={header}
    />
  );
};
export const container = HistoryContainer;
