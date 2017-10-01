//react库
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

import reducers from './reducer/reducers';
import Todo from './containers/todo';


//createStore可以接收初始state作为第二个参数，也可以写在reducers里面
const store = window.store = createStore(
    reducers,
    applyMiddleware(logger)
);

const rootEl = document.getElementById('root');
const render = () => ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    rootEl
);

render();