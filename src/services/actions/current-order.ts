import { ADD_CURRENT_ORDER_INFO, DELETE_CURRENT_ORDER_INFO } from "../constants/current-order";
import { TOrder } from "../types/types";

export interface IAddCurrentOrderInfo {
  readonly type: typeof ADD_CURRENT_ORDER_INFO;
  payload: TOrder
}

export interface IDeleteCurrentOrderInfo {
  readonly type: typeof DELETE_CURRENT_ORDER_INFO;
}

export type TCurrentOrderActions =
  | IAddCurrentOrderInfo
  | IDeleteCurrentOrderInfo;

export const addCurrentOrderInfo = (payload: TOrder): IAddCurrentOrderInfo => ({
  type: ADD_CURRENT_ORDER_INFO,
  payload
});

export const deleteCurrentOrderInfo = (): IDeleteCurrentOrderInfo => ({
  type: DELETE_CURRENT_ORDER_INFO,
});
