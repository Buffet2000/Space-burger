import { postOrder } from "../../components/api/api";

//Текущий заказ
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';

export const DELETE_ORDER = 'DELETE_ORDER';

export function postOrderInfo(orderIds) {

  return function (dispatch) {
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST
    })

    postOrder(orderIds).then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_NUMBER_SUCCESS,
          payload: res.order.number
        })
      }
    }).catch(e => {
      dispatch({
        type: GET_ORDER_NUMBER_FAILED,
      })
    })
  }
}

export const deleteOrder = () => ({ type: DELETE_ORDER })