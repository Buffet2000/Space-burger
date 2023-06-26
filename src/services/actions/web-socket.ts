import { Order } from "../../services/types/types";
import { WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_ORDERS } from "../constants/web-socket";

// Типизация экшенов
export interface WsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}
export interface WsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface WsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: string;
}
export interface WsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface WsGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload:{orders: Order[], total: number, totalToday: number};
}


// Union тип
export type WsActions = 
  | WsConnectionStart
  | WsConnectionSuccess
  | WsConnectionError
  | WsConnectionClosed
  | WsGetOrders
  ;