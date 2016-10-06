import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import moment from 'moment';

const Todo = (props) => {
  
  const {id, text, completed, createdAt, completedAt, dispatch} = props;
  
  const handleClick = () => {
    dispatch(actions.toggleTodo(id));
  };
  
  const todoClassName = completed ? 'todo todo--completed' : 'todo';
  
  const renderDate = () => {
    let message = 'Created '
    let timeStamp = createdAt;
    
    if(completed) {
      message = 'Completed ';
      timeStamp = completedAt;
    }
    
    return message + moment.unix(timeStamp).format('MMM DD, YY @ HH:mm');
    
  };
  
  return (
    <div className={todoClassName} onClick={handleClick}>
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

export default connect()(Todo); // by this we have access to dispatch as props of our compnent