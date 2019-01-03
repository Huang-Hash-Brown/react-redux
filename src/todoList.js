import React, { Component, Fragment } from 'react';
import TodoItem from './todoItem.jsx';
import Transition from './transition.jsx';
import axios from 'axios';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todoList: []
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleSubmit() {
    this.setState((prevState) => ({
      inputValue: '',
      todoList: [prevState.inputValue, ...prevState.todoList]
    }))
  }

  handleDelete(index) {
    this.setState((prevState) => {
      const todoList = [...prevState.todoList]
      todoList.splice(index, 1)
      return {
        todoList
      }
    })
  }

  getTodoList() {
    return (
      this.state.todoList.map((item, index) => {
        return (
          <Fragment key={ item }>
            <TodoItem
              index={ index }
              content={ item }
              deleteItem={ this.handleDelete } />
          </Fragment>
        )
      })
    )
  }

  componentDidMount() {
    axios.get('/api/todolist').then((res) => {
      if(res.status === 200) {
        let { data } = res;
        data = JSON.parse(JSON.stringify(data));
        this.setState((prevState) => {
          const todoList = [...data]
          return {
            todoList
          }
        })
      }
    }).catch((err) => {
      console.log('err', err)
    })
  }

  render() {
    return (
      <Fragment>
        { /* 这是头部 */ }
        <header>
          <label htmlFor="a">输入内容</label>
          <input
            id="a"
            className="input"
            value={this.state.inputValue }
            onChange={this.handleChange} />
          <button onClick={ this.handleSubmit }>提交</button>
        </header>
        <section>
          <h4>任务列表</h4>
          <ul>
            { this.getTodoList() }
          </ul>
        </section>
        {/* 动画组件 */}
        <Transition />
      </Fragment>
    )
  }
}

export default TodoList;