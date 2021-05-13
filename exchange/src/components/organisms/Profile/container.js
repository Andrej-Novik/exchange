import { useSelector } from "react-redux";
import Profile from "./component";

const ProfileContainer = () => {
  const user = useSelector((state) => state.auth.user);
  const lastTradeDate = useSelector(
    (state) =>
      state.transactions.transactions[
        state.transactions.transactions.length - 1
      ].date
  );
  const lastTradeTime = useSelector(
    (state) =>
      state.transactions.transactions[
        state.transactions.transactions.length - 1
      ].time
  );
  const firstTradeDate = useSelector(
    (state) => state.transactions.transactions[0].date
  );
  const firstTradeTime = useSelector(
    (state) => state.transactions.transactions[0].time
	);
	const tradesNumber = useSelector(
    (state) => state.transactions.transactions.length
	);

  return (
    <Profile
      ava={user.ava}
      name={user.name}
      lastTradeDate={lastTradeDate}
      lastTradeTime={lastTradeTime}
      firstTradeDate={firstTradeDate}
			firstTradeTime={firstTradeTime}
			tradesNumber={tradesNumber}
    />
  );
};
export const container = ProfileContainer;
