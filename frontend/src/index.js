import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import * as ReactDOMClient from "react-dom/client";
// import { Provider, createStore } from "react-redux";
// import rootReducer from "./modules/index";

import { createStore } from 'redux';
import reducers from './reduers';
import { Provider }  from 'react-reudx';

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
   
    
  </React.StrictMode>
);                                      

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
