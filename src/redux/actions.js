export const INCREMENT_NUMBER = 'INCREMENT_NUMBER'
export const DECREMENT_NUMBER = 'DECREMENT_NUMBER'

export function increment() {
	return function (dispatch) {
		dispatch({
			type: INCREMENT_NUMBER,
		})
	}
}

export function decrement() {
	return function (dispatch) {
		dispatch({
			type: DECREMENT_NUMBER,
		})
	}
}
