import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
// 该只负责UI的渲染(傻瓜组件)
  render() {
    return (
      <div style={{ margin: '10px 10px' }}>
        <Input
          placeholder="todo info"
          style={{ width: 300, marginRight: 10 }}
          value={ this.props.inputValue }
          onChange={ this.props.hanldeInputChange }
        />
        <Button type="primary" onClick={this.props.handleSubmit}>提交</Button>
        <List
          style={{ marginTop: 10, width: 300 }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={ () => { this.props.handleDelete(index)} }>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoListUI;