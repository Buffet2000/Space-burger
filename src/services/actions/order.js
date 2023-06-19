import { postOrder } from "../../components/api/api";
import { GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED, ADD_ORDER, DELETE_ORDER } from "../constants/order";


export function postOrderInfo(orderIds) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST,
    });

    postOrder(orderIds)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_NUMBER_SUCCESS,
            payload: res.order.number,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: GET_ORDER_NUMBER_FAILED,
        });
      });
  };
}

export const saveOrderitems = (payload) => ({ type: ADD_ORDER, payload });
export const deleteOrder = () => ({ type: DELETE_ORDER });
