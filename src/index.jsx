import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { rootReducer } from "../src/services/reducers/root-reducer";
import { legacy_createStore as createStore } from "redux";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { wsMiddleware } from './services/middleware/wsMiddleware';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS
} from "./services/actions/web-socket";
import {
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_GET_AUTH_ORDERS
} from "./services/actions/web-socket-auth";

const wsUrl = 'wss://norma.nomoreparties.space'
const wsActions = {
  wsStart: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  getOrders: WS_GET_ORDERS
};
const wsAuthActions = {
  wsStart: WS_AUTH_CONNECTION_START,
  onOpen: WS_AUTH_CONNECTION_SUCCESS,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onError: WS_AUTH_CONNECTION_ERROR,
  getOrders: WS_GET_AUTH_ORDERS
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancers = composeEnhancers(applyMiddleware(thunk, wsMiddleware(`${wsUrl}/orders`, wsAuthActions, true), wsMiddleware(`${wsUrl}/orders/all`, wsActions, false),));
export const store = createStore(rootReducer, enhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);