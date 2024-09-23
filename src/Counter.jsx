import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increament,decreament,reset, addValue } from './redux/countSlice'
import { useState } from 'react'


function Counter() {
  const [val,setval]=useState(0)
  const {count}=useSelector((state)=>state.counterReducer)
  console.log(count)
  const dispatch=useDispatch()
  return (
   <>
   <div className='w-75 p-3 border shadow border-light'>
    <h1 className='text-danger text-center'>Counter</h1>
    <h3 className='text-center mt-3 text-light'>{count}</h3>
    <div className='d-flex justify-content-around my-3'>
        <button className='btn btn-info' onClick={()=>{dispatch(increament())}}>+ increase</button>
        <button className='btn btn-danger'onClick={()=>{dispatch(reset())}}>Reset</button>
        <button className='btn btn-success'onClick={()=>{dispatch(decreament())}}>- Decrease</button>

    </div>
    <div className='d-flex mt-3'>
      <input type="text" className='form-control' name="" id="" onChange={(e)=>{setval(Number(e.target.value))}} />
      <button className='btn btn-info w-25'onClick={()=>{dispatch(addValue(val))}} >submit</button>
    </div>
    </div>

   
   </>
  )
}

export default Counter