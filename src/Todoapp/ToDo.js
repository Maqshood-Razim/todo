import React, { useEffect, useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import ListTasks from './ListTasks'

const ToDo = () => {
    const [tasks,settasks]=useState([
        
    ])

    const addTask=(title)=>{
        const newTask=[...tasks,{title}]
        settasks(newTask)

    }

    const removetask=(index)=>{
        const newTask=[...tasks]
        newTask.splice(index,1)
        settasks(newTask)
    }
    useEffect(()=>{
        document.title=`you have ${tasks.length} pending task(s)`
    })

  return (
    <>
        <div className='Todo-container'>
            <div className='header'>Todo App</div>
            <div className='add-task'><AddTask addTask={addTask} /></div>

            <div className='tasks'>
               {tasks.map((task,index)=>( <ListTasks task={task}  removetask={removetask} index={index}  key={index} />))}
               
                </div>
        </div>
    </>

  )
}

export default ToDo