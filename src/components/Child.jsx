import React from 'react'
import {useSelector} from 'react-redux';
import SubChild from './SubChild';
export default function Child() {
    const data = useSelector(state=>state.counter.value)
  return (
    <div>
    <h1>Child-{data}</h1> 
    <SubChild/> 
    </div>
  )
}



