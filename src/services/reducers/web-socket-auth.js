import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_GET_AUTH_ORDERS,
} from "../constants/web-socket-auth";

const initialState = {
  wsAuthConnected: false,
  wsAuthError: undefined,
  orders: null,
  total: 0,
  totalToday: 0,
};

export const webSocketAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        wsAuthError: undefined,
        wsAuthConnected: true,
      };

    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        wsAuthError: action.payload,
        wsAuthConnected: false,
      };

    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        wsAuthError: undefined,
        wsAuthConnected: false,
        orders: null,
      };

    case WS_GET_AUTH_ORDERS:
      return {
        ...state,
        wsAuthError: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
