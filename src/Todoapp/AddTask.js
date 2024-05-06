import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value,setvalue]=useState("")

  const additem=()=>{
    addTask(value)
    setvalue("")
  }

  return (
    <>
        <div className='input-container'>
            <input type='text' placeholder='Add a new task' value={value}  onChange={(e)=>setvalue(e.target.value)}   />
            <button className='btn' onClick={additem} >Add Task</button>
        </div>
    </>
  )
}

export default AddTask