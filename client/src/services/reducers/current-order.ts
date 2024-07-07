import { ADD_CURRENT_ORDER_INFO, DELETE_CURRENT_ORDER_INFO } from "../constants/current-order";
import { CurrentOrderActions } from "../actions/current-order";
import { Order } from "../types/types";

type ШnitialState = {
  information: Order | null
}

const initialState: ШnitialState = {
  information: null
}

export const currentOrderReducer = (state = initialState, action: CurrentOrderActions) => {
  switch (action.type) {
    case ADD_CURRENT_ORDER_INFO: {
      return { information: action.payload };
    }
    case DELETE_CURRENT_ORDER_INFO: {
      return { information: null };
    }
    default: {
      return state;
    }
  }
};