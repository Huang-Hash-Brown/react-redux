import axios from 'axios';

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_LIST = 'SUBMIT_LIST';
export const DELETE_ITEM = 'DELETE_ITEM';
export const GET_LIST_DATA = 'GET_LIST_DATA';

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const submitInputAction = (value) => {
  return {
    type: SUBMIT_LIST,
    value
  }
}

export const deleteAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}

export const initListDataAction = (value) => {
  return {
    type: GET_LIST_DATA,
    value
  }
}

// 使用 redux-chunk 之后， action 可以不再返回对象{}， 可以返回一个函数,实现异步操作
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist')
      .then(res => {
        const { data } = res
        if(res.status === 200) {
          const action = initListDataAction(data);
          dispatch(action);
        }
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}