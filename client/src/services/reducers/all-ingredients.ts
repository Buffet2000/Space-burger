import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants/all-ingredients";
import { Ingredient } from "../types/types";
import { IngredientsDataActions } from "../actions/all-ingredients";

//Все ингредиенты от запроса API
type InitialState = {
  items: Ingredient[] | null,
  itemsRequest: boolean,
  itemsFailed: boolean,
  itemsLoaded: boolean,
}

const initialState: InitialState = {
  items: null,
  itemsRequest: false,
  itemsFailed: false,
  itemsLoaded: false,
};

export const ingredientsReducer = (state = initialState, action: IngredientsDataActions) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, itemsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, itemsFailed: false, items: action.payload, itemsRequest: false, itemsLoaded: true, };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    default: {
      return state;
    }
  }
};