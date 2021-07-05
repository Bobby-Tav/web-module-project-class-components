
import React,{useState} from 'react';


const TodoForm = (props) =>{
    const [input,setInput]=useState('')
    console.log(props)
    const handleChange = e =>{
        setInput(e.target.value)
        
        
    }
    const onSubmit = e =>{
        e.preventDefault()
        props.addTask(input)
    }
    return(
        <form onSubmit={onSubmit}>
            <input type='text' name='task' onChange={handleChange}/>
            <button>Add To List</button>
        </form>
    )
}

export default TodoForm; 