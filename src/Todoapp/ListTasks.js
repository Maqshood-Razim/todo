import React from 'react'

const ListTasks = ({task,index,removetask}) => {
  return (
    <>
        <div className='list-task'>
           {task.title}
            <button className='delete-btn' onClick={()=>{removetask(index)}} >Delete</button>
        </div>
    </>
  )
}

export default ListTasks