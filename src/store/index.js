import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// Chrome redux 开发插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

// Redux设计和使用的三项原则
// --1 store是唯一的
// --2 只有 store 能改变自己的内容， reducer可以接受state,但不能修改 state的内容！
// --3 Reducer 必须是 纯函数 （给固定的输入 就会有 固定的输出， 并且不会有任何副作用）
const store = createStore(reducer, enhancer);

export default store;
