import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Reducer/counterSlice';

const CounterExample = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Redux Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>{dispatch(increment())}}>increment</button>
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default CounterExample