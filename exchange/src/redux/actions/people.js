import {OPEN_MODAL, CLOSE_MODAL} from "../actionTypes/people"

export const openModal = () => {
	return {type: OPEN_MODAL}
}
export const closeModal = () => {
	return {type: CLOSE_MODAL}
}