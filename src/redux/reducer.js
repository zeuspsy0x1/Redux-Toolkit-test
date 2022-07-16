import { INCREMENT_NUMBER, DECREMENT_NUMBER } from './actions'

const initialState = {
	number: 0,
}

const reducer = function (state = initialState, action) {
	switch (action.type) {
		//                                                          FETCH ALL INFORMATION
		case INCREMENT_NUMBER:
			let num = state.number

			return {
				...state,
				number: num + 1,
			}
		case DECREMENT_NUMBER:
			let numd = state.number
			return {
				...state,
				number: numd - 1,
			}

		default:
			return state
	}
}
export default reducer
