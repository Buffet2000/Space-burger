import {
  ADD_INGREDIENT,
  INGREDIENT_MOVE,
  DELETE_INGREDIENT,
  ADD_BUNS,
  DELETE_ALL_INGREDIENTS,
} from "../constants/constructor-ingredients";
import update from "immutability-helper";
import { Ingredient } from "../types/types";
import { IngrediensConstructorActions } from "../actions/constructor-ingredients";

type InitialState = {
  ingredients: Ingredient[] | [],
  buns: Ingredient[] | []
}

const initialState: InitialState = {
  ingredients: [],
  buns: [],
};

export const ingredientsConstructorReducer = (state = initialState, action: IngrediensConstructorActions) => {
  switch (action.type) {
    case ADD_BUNS:
      return { ...state, buns: action.payload }
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.payload] }
    case DELETE_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients.filter((item) => item?.id !== action.payload)] }
    case DELETE_ALL_INGREDIENTS:
      return { ...state, ingredients: [], buns: [] }
    case INGREDIENT_MOVE:
      return {
        ...state,
        ingredients: update(state.ingredients, {
          $splice: [
            [action.payload.dragIndex, 1],
            [action.payload.hoverIndex, 0, state.ingredients[action.payload.dragIndex]],
          ],
        }),
      }
    default:
      return state;
  }
};
