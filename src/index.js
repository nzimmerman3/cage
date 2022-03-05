import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* import Info from "./components/Info" */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './reducers/cart'

const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router forceRefresh={true}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// <Info />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
