import * as redux from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export const configure = () => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });
  
  
  // create store and add support for react dev tools in Chrome
  const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
  
}