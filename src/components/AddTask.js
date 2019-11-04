import React, { Component } from 'react'
import './AddTask.css';
export default class AddTask extends Component {
  constructor(){
    super();
    this.state = {
      task : '',
      isDone : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      task : e.target.value,
      isDone : false
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.add({...this.state});
    this.setState({
      task : '',
      isDone : false
    })
  }


  render() {
    return (
      <div>
        <input name="todo" value={this.state.task} onChange={this.handleChange} className="task-input" placeholder="Add your new task"/>
        <button className="add-task" onClick={this.handleSubmit}>+</button>
      </div>
    )
  }
}
