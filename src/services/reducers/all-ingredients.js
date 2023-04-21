import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../actions/all-ingredients";

//Все ингредиенты от запроса API
const initialState = {
  items: [],
  itemsError: false,
  itemsLoading: true,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, itemsLoading: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, itemsError: false, items: action.items, itemsLoading: false };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsError: true, itemsLoading: false };
    }
    default: {
      return state;
    }
  }
};