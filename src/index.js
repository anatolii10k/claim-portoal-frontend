import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './store/reducer'
import {Web3ReactProvider,useWeb3React} from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const middlewares =[
  apiMiddleware,
  ReduxThunk
]

const store = createStore(reducers, {}, applyMiddleware(...middlewares))
function getLibrary(provider){
   const library = new Web3Provider(provider);
   library.pollingInterval = 12000
   return library;
}
ReactDOM.render(
  <React.StrictMode>
     
    <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
    <App />
    </Provider>
    </Web3ReactProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
