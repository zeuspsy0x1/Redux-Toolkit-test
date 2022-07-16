import React from 'react'
import logo from './logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import { SumOne } from './redux/toSum.slice'
import { SubtractOne } from './redux/toSum.slice'

function App() {
	const dispatch = useDispatch()

	const handleClick = (e, effect) => {
		e.preventDefault()

		if (effect === 1) return dispatch(SumOne())

		if (effect === 2) return dispatch(SubtractOne())
	}

	const number = (state) => state.number.value // El useSelector se puede reemplazar ahora por esta forma de acceder al valor del estado de redux

	return (
		<>
			<div>Number: {number}</div>
			<button onClick={(e) => handleClick(e, 1)}> add 1 </button>
			<button onClick={(e) => handleClick(e, 2)}> add 2 </button>
		</>
	)
}

export default App
