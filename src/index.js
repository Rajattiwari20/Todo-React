import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App';
import rootReducer from './reducer';

//created store 
const store = createStore(rootReducer, applyMiddleware(logger,thunk))
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store} >
       <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

