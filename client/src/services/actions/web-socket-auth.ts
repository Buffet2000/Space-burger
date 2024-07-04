import { Order } from "../../services/types/types";
import { WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_SUCCESS, WS_AUTH_CONNECTION_ERROR, WS_AUTH_CONNECTION_CLOSED, WS_GET_AUTH_ORDERS } from "../constants/web-socket-auth";

// Типизация экшенов
export interface WsAuthConnectionStart {
  readonly type: typeof WS_AUTH_CONNECTION_START;
}
export interface WsAuthConnectionSuccess {
  readonly type: typeof WS_AUTH_CONNECTION_SUCCESS;
}
export interface WsAuthConnectionError {
  readonly type: typeof WS_AUTH_CONNECTION_ERROR;
  payload: string;
}
export interface WsAuthConnectionClosed {
  readonly type: typeof WS_AUTH_CONNECTION_CLOSED;
}
export interface WsGetAuthOrders {
  readonly type: typeof WS_GET_AUTH_ORDERS;
  payload:{orders: Order[], total: number, totalToday: number};
}


// Union тип
export type WsAuthActions = 
  | WsAuthConnectionStart
  | WsAuthConnectionSuccess
  | WsAuthConnectionError
  | WsAuthConnectionClosed
  | WsGetAuthOrders
  ;