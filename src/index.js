import React from 'react';
import ReactDom from 'react-dom';

import './styles/styles.scss';
import { App } from './App';

const main = document.querySelector('#root');

ReactDom.render(
    <App />, 
    main);



