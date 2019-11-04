import React, { Component } from 'react'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import './App.css'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      todos : []
    }

    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(task){
    const {todos} = this.state;
    todos.push(task)
    this.setState({
      todos
    })
  }

  removeTodo(id){
    const {todos} = this.state;
    todos.splice(id,1);
    this.setState({
      todos
    })
  }


  render() {
    return (
      <div className="App">
        <AddTask add={this.addTodo} />
        <TodoList remove={this.removeTodo} todos={this.state.todos} />
      </div>
    )
  }
}
