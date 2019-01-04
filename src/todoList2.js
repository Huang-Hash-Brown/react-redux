// with Redux
import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
// import actions
import { getInputChangeAction, submitInputAction, deleteAction } from './store/action';
import 'antd/dist/antd.css';
import store from './store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { ...store.getState() }
    this.hanldeInputChange = this.hanldeInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
    return (
      <div style={{ margin: '10px 10px' }}>
        <Input
          placeholder="todo info"
          style={{ width: 300, marginRight: 10 }}
          value={ this.state.inputValue }
          onChange={ this.hanldeInputChange }
        />
        <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        <List
          style={{ marginTop: 10, width: 300 }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleDelete.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }

}

export default TodoList;