// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'


function TodoList(props){
const handleClear = () =>{
    console.log(props)
    props.clearTasks();
} 
    return(
        <div>
            <h2>Things to do</h2>
            {props.todo.map(task=>{
                return <Todo task={task} toggleTask={props.toggleTask}/>
            })}

        <button onClick={handleClear}>Clear Task</button>
        </div>
    )
}

export default TodoList;
