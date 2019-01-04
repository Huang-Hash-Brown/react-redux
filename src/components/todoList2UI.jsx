import React from 'react';
import { Input, Button, List } from 'antd';
// 该只负责UI的渲染(傻瓜组件)
// 可封装为 无状态 组件  无状态函数组件性能 > es6 Class组件性能
const TodoListUI = (props) => {
  return (
    <div style={{ margin: '10px 10px' }}>
      <Input
        placeholder="todo info"
        style={{ width: 300, marginRight: 10 }}
        value={ props.inputValue }
        onChange={ props.hanldeInputChange }
      />
      <Button type="primary" onClick={props.handleSubmit}>提交</Button>
      <List
        style={{ marginTop: 10, width: 300 }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={ () => { props.handleDelete(index)} }>{item}</List.Item>)}
      />
    </div>
  )
}

export default TodoListUI;