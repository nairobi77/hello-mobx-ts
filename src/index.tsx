import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./store";
import {Provider} from "mobx-react";

ReactDOM.render(
    <Provider storeX={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

