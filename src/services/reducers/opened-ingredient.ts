import {
  ADD_INGREDIENT_INFO,
  DELETE_INGREDIENT_INFO,
} from "../constants/opened-ingredient";
import { Ingredient } from "../types/types";
import { OpenedIngredientInfoActions } from "../actions/opened-ingredient-info";

type initialState = {
  information: Ingredient | null,
}

//Открытый ингредиент, информация
const initialState = {
  information: null,
};

export const ingredientReducer = (state = initialState, action: OpenedIngredientInfoActions) => {
  switch (action.type) {
    case ADD_INGREDIENT_INFO: {
      return { information: action.payload };
    }
    case DELETE_INGREDIENT_INFO: {
      return { information: null };
    }
    default: {
      return state;
    }
  }
};
