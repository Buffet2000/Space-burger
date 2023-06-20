import { postOrder } from "../../components/api/api";
import {
  GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED,
  ADD_ORDER, DELETE_ORDER
} from "../constants/order";
import { AppDispatch, AppThunk } from "../types";

// Order Number
export interface IGetOrderNumberRequest {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST
}
export interface IGetOrderNumberSuccess {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS,
  payload: number
}
export interface IGetOrderNumberFailed {
  readonly type: typeof GET_ORDER_NUMBER_FAILED
}

export const getOrderNumberRequest = (): IGetOrderNumberRequest => ({
  type: GET_ORDER_NUMBER_REQUEST
})
export const getOrderNumberSuccess = (payload: number): IGetOrderNumberSuccess => ({
  type: GET_ORDER_NUMBER_SUCCESS,
  payload
});
export const getOrderNumberFailed = () => ({
  type: GET_ORDER_NUMBER_FAILED
})

// Add/Delete Order
export interface IAddOrder {
  readonly type: typeof ADD_ORDER,
  payload: string[]
}
export interface IDeleteOrder {
  readonly type: typeof DELETE_ORDER
}

export const saveOrderitems = (payload: string[]): IAddOrder => ({
  type: ADD_ORDER,
  payload
});
export const deleteOrder = (): IDeleteOrder => ({
  type: DELETE_ORDER
});

export type TOrderActions =
  | IGetOrderNumberRequest
  | IGetOrderNumberSuccess
  | IGetOrderNumberFailed
  | IAddOrder
  | IDeleteOrder
  ;

export const postOrderInfo: AppThunk = (orderIds: Array<string>) => {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderNumberRequest);

    postOrder(orderIds)
      .then((res) => {
        if (res && res.success) {
          dispatch(getOrderNumberSuccess(res.order.number));
        }
      })
      .catch((e) => {
        dispatch(getOrderNumberFailed);
      });
  };
}