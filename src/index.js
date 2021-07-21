import React from 'react';
import ReactDom from 'react-dom';
import './styles/styles.scss';
import { App } from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const main = document.querySelector('#root');

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    main);



