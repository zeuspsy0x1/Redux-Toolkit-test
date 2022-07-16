import React from 'react'
import logo from './logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import { increment } from './redux/actions'
import { decrement } from './redux/actions'

function App() {
	const dispatch = useDispatch()

	const handleClick = (e, effect) => {
		e.preventDefault()

		if (effect === 1) return dispatch(increment())

		if (effect === 2) return dispatch(decrement())
	}

	const number = useSelector((state) => state.number)

	return (
		<>
			<div>Number: {number}</div>
			<button onClick={(e) => handleClick(e, 1)}> add 1 </button>
			<button onClick={(e) => handleClick(e, 2)}> add 2 </button>
		</>
	)
}

export default App
