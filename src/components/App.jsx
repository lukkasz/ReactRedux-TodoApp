import React, { Component } from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="todo-container">
              <TodoSearch />
                <TodoList />
              <AddTodo />  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

