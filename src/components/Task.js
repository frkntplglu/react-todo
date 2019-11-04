import React, { Component } from 'react'

export default class Task extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.props.remove(e.target.id)
  }
  render() {
    return (
      <li id={this.props.id} onClick={this.handleClick}>
        <i className="checkbox"></i>
        {this.props.title}
      </li>
    )
  }
}
