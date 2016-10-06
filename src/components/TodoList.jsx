import React, { Component } from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';


class TodoList extends Component {
  constructor() {
    super();
  }
  
  render() {
    const {todos, showCompleted, searchText} = this.props;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    const renderTodos = () => {
      
      if (todos.length === 0) {
        return (<p className="todo-container__message">Nothing To Do</p>);
      }
      
      return filteredTodos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo} />  
          )
      })
      
    }
    
    
    return (
      <div>{renderTodos()}</div>  
    )
  }
}

export default connect(
  (state) => {      
    return state;
  }
)(TodoList);