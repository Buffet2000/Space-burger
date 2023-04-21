import { GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED, DELETE_ORDER } from "../actions/order";

const initialState = {
  orderNumber: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
  isLoaded: false,
  orderItems: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBER_REQUEST:
      return { ...state, orderNumberRequest: true };
    case GET_ORDER_NUMBER_SUCCESS:
      return { ...state, orderNumber: action.payload, orderNumberRequest: false, orderNumberFailed: false, isLoaded: true };
    case GET_ORDER_NUMBER_FAILED:
      return { ...state, orderNumberRequest: false, orderNumberFailed: true, };
    case DELETE_ORDER:
      return { ...state, orderItems: [], orderNumber: null, orderNumberRequest: false, orderNumberFailed: false, isLoaded: false };
    default:
      return state;
  }
}