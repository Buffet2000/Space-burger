import { ADD_CURRENT_ORDER_INFO, DELETE_CURRENT_ORDER_INFO } from "../constants/current-order";
import { Order } from "../types/types";

export interface AddCurrentOrderInfo {
  readonly type: typeof ADD_CURRENT_ORDER_INFO;
  payload: Order
}

export interface DeleteCurrentOrderInfo {
  readonly type: typeof DELETE_CURRENT_ORDER_INFO;
}

export type CurrentOrderActions =
  | AddCurrentOrderInfo
  | DeleteCurrentOrderInfo;

export const addCurrentOrderInfo = (payload: Order): AddCurrentOrderInfo => ({
  type: ADD_CURRENT_ORDER_INFO,
  payload
});

export const deleteCurrentOrderInfo = (): DeleteCurrentOrderInfo => ({
  type: DELETE_CURRENT_ORDER_INFO,
});
