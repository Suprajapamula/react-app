import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {inc,dec} from './counterSlice'

function Counter() {
    var {count}=useSelector(state=>state.c)
    console.log(count)
    var dispatch=useDispatch()
  return (
    <div className='myBox'>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch(inc())}}>Increment</button>
        <button onClick={()=>{dispatch(dec())}}>Decrement</button>
    </div>
  )
}
export default Counter
