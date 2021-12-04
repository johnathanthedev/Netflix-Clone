import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk' 
import { reducers } from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
  thunk
]

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);