import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { rootReducer } from "../src/services/reducers/root-reducer";
import { legacy_createStore as createStore} from 'redux';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);