import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class TodoSearch extends Component {
  constructor() {
    super();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleShowCompleted = this.handleShowCompleted.bind(this);
  }
  
  handleSearchText() {
    const searchText = this.refs.searchText.value;
    this.props.dispatch(actions.setSearchText(searchText));
  }
  
  handleShowCompleted() {
    this.props.dispatch(actions.toggleShowCompleted());
  }
  
  render() {
    const {showCompleted, searchText} = this.props;
    return(
      <div className="todo-container__header">
        <div>
          <input className="form-control" type="search" ref="searchText" value={searchText} placeholder="Search Todos" onChange={this.handleSearchText}/>
        </div>
        <div className="checkbox text-center">
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={this.handleShowCompleted} /> 
            <span className="text-primary">Show completed todos</span>
          </label>
        </div>
      </div>  
    ) 
  }
}

export default connect(
  (state)=>{
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }    
  }
)(TodoSearch);