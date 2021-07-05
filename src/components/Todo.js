import React from 'react';

const Todo = (props) =>{
    const handleClick = () =>{
        props.toggleTask(props.task.id)
        console.log(props.task.completed)
    }
    return(
        <div onClick={handleClick}>
        <h3>{props.task.task}</h3>
        </div>
    )
}

export default Todo;