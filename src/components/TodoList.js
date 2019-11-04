import React, { Component } from 'react'
import Task from './Task';
import './TodoList.css';
export default class TodoList extends Component {

  render() {
    //const activeTodos = this.props.todos.filter(task => task.isDone === false);
    return (
      <div className="task-list">
        <ul>
          
          {
            this.props.todos.map((task,key) => <Task id={key} key={key} title={task.task} remove={this.props.remove} />)
          }
        </ul>
      </div>
    )
  }
}
