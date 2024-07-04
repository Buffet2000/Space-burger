import {
  GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED,
  ADD_ORDER, DELETE_ORDER,
} from "../constants/order";
import { OrderActions } from "../actions/order";

type initialState = {
  orderNumber: number | null,
  orderNumberRequest: boolean,
  orderNumberFailed: boolean,
  isLoaded: boolean,
  orderItems: string[] | [],
}

const initialState: initialState = {
  orderNumber: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
  isLoaded: false,
  orderItems: [],
};

export const orderReducer = (state = initialState, action: OrderActions) => {
  switch (action.type) {
    case GET_ORDER_NUMBER_REQUEST:
      return { ...state, orderNumberRequest: true };

    case GET_ORDER_NUMBER_SUCCESS:
      return { ...state, orderNumber: action.payload, orderNumberRequest: false, orderNumberFailed: false, isLoaded: true };

    case GET_ORDER_NUMBER_FAILED:
      return { ...state, orderNumberRequest: false, orderNumberFailed: true, };

    case ADD_ORDER:
      return { ...state, orderItems: action.payload };

    case DELETE_ORDER:
      return { ...state, orderItems: [], orderNumber: null, orderNumberRequest: false, orderNumberFailed: false, isLoaded: false };

    default:
      return state;
  }
}