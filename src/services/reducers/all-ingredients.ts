import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants/all-ingredients";
import { TIngredients } from "../types/types";

//Все ингредиенты от запроса API
const initialState: TIngredients = {
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
      return {
        ...state,
        itemsError: false,
        items: action.items,
        itemsLoading: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsError: true, itemsLoading: false };
    }
    default: {
      return state;
    }
  }
};
