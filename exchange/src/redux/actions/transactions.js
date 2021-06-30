import {NEW_TRANSACTION} from "../actionTypes/transactions"

export const newTransaction = (name, abbreviation, amount, isBuy, img) => {
	
  return { type: NEW_TRANSACTION, name, abbreviation, amount, isBuy, img};
};