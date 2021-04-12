import { useSelector } from "react-redux";
import Header from "./component";

const HeaderContainer = () => {

	const user = useSelector(state => state.auth.user)

  return (
		<Header ava={user.ava} name={user.name}/>
  );
};

export const container = HeaderContainer;
