import React, { memo } from 'react'

const Todos = ({todos,addTodo}) => {
    console.log('child render')
  return (
    <div>
        <h2>My Todos</h2>
        {
            todos.map((item,index)=>{
                return(
                    <p key={index}>{item + index}</p>
                )
            })
        }
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todos)