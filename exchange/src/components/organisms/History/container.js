import History from "./component";
import { useSelector } from "react-redux";

const HistoryContainer = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  return <History transactions={transactions} />;
};

export const container = HistoryContainer;
