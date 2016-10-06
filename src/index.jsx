import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from 'App';
import TodoAPI from 'TodoAPI';

// Same as abova
import * as actions from 'actions'; // same as => const actions = require('actions');
import * as configureStore from 'configureStore'; // const configreStore = require('configureStore');
const store = configureStore.configure();

store.subscribe(()=>{
  const state = store.getState();
  //console.log("new state", state);
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));


//Load bootstrap css
require('style!css!bootstrap/dist/css/bootstrap.min.css');

//Load Custom App Style
import 'style!css!sass!applicationStyles';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
