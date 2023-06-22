import { postOrder } from "../../components/api/api";
import {
  GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED,
  ADD_ORDER, DELETE_ORDER
} from "../constants/order";
import { AppDispatch, AppThunk } from "../types";

// Order Number
export interface GetOrderNumberRequest {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST,
}
export interface GetOrderNumberSuccess {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS,
  payload: number,
}
export interface GetOrderNumberFailed {
  readonly type: typeof GET_ORDER_NUMBER_FAILED,
}

export const getOrderNumberRequest = (): GetOrderNumberRequest => ({
  type: GET_ORDER_NUMBER_REQUEST,
})
export const getOrderNumberSuccess = (payload: number): GetOrderNumberSuccess => ({
  type: GET_ORDER_NUMBER_SUCCESS,
  payload,
});
export const getOrderNumberFailed = (): GetOrderNumberFailed => ({
  type: GET_ORDER_NUMBER_FAILED,
});

// Add/Delete Order
export interface AddOrder {
  readonly type: typeof ADD_ORDER,
  payload: string[],
}
export interface DeleteOrder {
  readonly type: typeof DELETE_ORDER,
}

export const saveOrderitems = (payload: string[]): AddOrder => ({
  type: ADD_ORDER,
  payload,
});
export const deleteOrder = (): DeleteOrder => ({
  type: DELETE_ORDER,
});

export type OrderActions =
  | GetOrderNumberRequest
  | GetOrderNumberSuccess
  | GetOrderNumberFailed
  | AddOrder
  | DeleteOrder
  ;

export const postOrderInfo: AppThunk = (orderIds: string[]) => {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderNumberRequest());

    postOrder(orderIds)
      .then((res) => {
        if (res && res.success) {
          dispatch(getOrderNumberSuccess(res.order.number));
        }
      })
      .catch((e) => {
        dispatch(getOrderNumberFailed());
      });
  };
}