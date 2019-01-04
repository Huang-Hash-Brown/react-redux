// with Redux
import React, { Component } from 'react';
// import actions
import { getInputChangeAction, submitInputAction, deleteAction } from '../store/action';
// import UI组件
import TodoListUI from './todoList2UI.jsx';
import 'antd/dist/antd.css';
import store from '../store';

class TodoList extends Component {
// 该组件为容器，专门做数据处理和逻辑（聪明组件）
  constructor(props) {
    super(props);
    this.state = { ...store.getState() }
    this.hanldeInputChange = this.hanldeInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    //当reducer返回新的state时，重新设置该组件的state
    store.subscribe(() => { this.setState(() => { return store.getState() }) });
  }

  hanldeInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleSubmit() {
    const action = submitInputAction(this.state.inputValue);
    store.dispatch(action);
  }

  handleDelete(index) {
    const action = deleteAction(index);
    store.dispatch(action);
  }

  render() {
    const { inputValue, list } = this.state
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        hanldeInputChange={this.hanldeInputChange}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
      />
    )
  }

}

export default TodoList;