import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants/all-ingredients";
import { TIngredients } from "../types/types";
import { TIngredientsDataActions } from "../actions/all-ingredients";

//Все ингредиенты от запроса API
/*const initialState: TIngredients = {
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
};*/

// список всех полученных ингредиентов,
type TInitialState = {
  items: Array<TIngredients> | null,
  itemsRequest: boolean,
  itemsFailed: boolean,
  itemsLoaded: boolean,
}

const initialState: TInitialState = {
  items: null,
  itemsRequest: false,
  itemsFailed: false,
  itemsLoaded: false,
};

export const ingredientsReducer = (state = initialState, action: TIngredientsDataActions) => {
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