import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './routes/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const store = createStore(
    reducers, 
    {},
    composeWithDevTools (
        applyMiddleware(reduxThunk)
    )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);