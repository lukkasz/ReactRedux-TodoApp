import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import moment from 'moment';

class Todo extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.dispatch(actions.toggleTodo(this.props.id));
  }
  
  render() {
    const {text, completed, createdAt, completedAt, dispatch} = this.props;
    const todoClassName = completed ? 'todo todo--completed' : 'todo';
    const renderDate = () => {
      let message = 'Created '
      let timeStamp = createdAt;
      
      if(completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }
      
      return message + moment.unix(timeStamp).format('MMM DD, YY @ HH:mm');
      
    }
    return (
      <div className={todoClassName} onClick={this.handleClick}>
        <div className="todo__checkbox">
           <input type="checkbox" checked={completed} readOnly />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>  
    )
  }
}

export default connect()(Todo); // by this we have access to dispatch as props of our compnent