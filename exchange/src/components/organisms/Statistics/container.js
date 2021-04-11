import Statistics from "./component"
import { useSelector} from 'react-redux'

const StatisticsContainer = () => {

	const incomeBalance = useSelector(state => state.balance.income)
	const outcomeBalance = useSelector(state => state.balance.outcome)

	let outcome = Math.trunc(outcomeBalance / (outcomeBalance + incomeBalance) * 100)
	let income = 100 - outcome

	return (
		<Statistics outcome={outcome} income={income}/>
	)
}

export const container =  StatisticsContainer