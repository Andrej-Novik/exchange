import { useSelector } from 'react-redux'
import Wallet from "./component"

const WalletContainer = () => {
	const currentBalance = useSelector(state => state.balance.current)
	const incomeBalance = useSelector(state => state.balance.income)
	const outcomeBalance = useSelector(state => state.balance.outcome)
	
	return (
		<Wallet
			currentBalance={currentBalance}
			incomeBalance={incomeBalance}
			outcomeBalance={outcomeBalance}
		/>
	)
}

export const container = WalletContainer