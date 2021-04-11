import { useSelector } from "react-redux"
import Dispatch from "./component"

const DispatchContainer = () => {

	const people = useSelector(state => state.people.people)

	return (
		<Dispatch people={people}/>
	)
}

export const container =  DispatchContainer