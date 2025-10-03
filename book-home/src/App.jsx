import React, { useState } from 'react'
import Router from "./router/Router"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(2)

  return (
    <>
    <Router/>
    </>
  )
}

export default App