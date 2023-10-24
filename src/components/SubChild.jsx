import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment, incrementByValue } from '../counterSlice';
export default function SubChild() {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.counter.value)
  return (
    <div>
      <h1>SubChild-{data}</h1>  
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch((incrementByValue(10)))}>Add By Value</button>
    </div>
  )
}



