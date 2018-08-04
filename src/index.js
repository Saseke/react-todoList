import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import Layouts from './component/Layouts';
import todoListReducer from './reducer/todoListReducer';
import {Provider} from 'react-redux'

const store = createStore(todoListReducer);


ReactDOM.render(
    <Provider store={store}>
        <Layouts/>
    </Provider>,
    document.getElementById('root')
);
