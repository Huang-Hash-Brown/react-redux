import { createStore } from 'redux';
import reducer from './reducer';

// Redux设计和使用的三项原则
// --1 store是唯一的
// --2 只有 store 能改变自己的内容， reducer可以接受state,但不能修改 state的内容！
// --3 Reducer 必须是 纯函数 （给固定的输入 就会有 固定的输出， 并且不会有任何副作用）
const store = createStore(
  reducer,
  // Chrome redux 开发插件
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
