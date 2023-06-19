import { ADD_CURRENT_ORDER_INFO, DELETE_CURRENT_ORDER_INFO } from "../constants/current-order";

export const addCurrentOrderInfo = (payload) => ({
  type: ADD_CURRENT_ORDER_INFO,
  payload,
});
export const deleteCurrentOrderInfo = () => ({
  type: DELETE_CURRENT_ORDER_INFO,
});
