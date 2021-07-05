import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const dummyTest = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: dummyTest
    }
  }

  addTask = (name) =>{
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state,
      todo: [...this.state.todo,newTask]})
  }
  toggleTask = (id) =>{
    this.setState({
      ...this.state.todo,
      todo:this.state.todo.map(task=>{
        if(task.id === id){
          return ({...task,completed:!task.completed})
        }else{
          return task
        }
      })
    })
  }

  clearTasks = () =>{
    this.setState({...this.state,
    todo:this.state.todo.filter(task =>{
      return task.completed === false
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} toggleTask={this.toggleTask} clearTasks={this.clearTasks} />
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
