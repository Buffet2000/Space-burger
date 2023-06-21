import { ADD_INGREDIENT_INFO, DELETE_INGREDIENT_INFO } from "../constants/opened-ingredient";
import { Ingredients } from "../types/types";

export interface AddIngredientInfo {
  readonly type: typeof ADD_INGREDIENT_INFO;
  payload: Ingredients
}

export interface DeleteIngredientInfo {
  readonly type: typeof DELETE_INGREDIENT_INFO;
}

// Union тип
export type IngredientInfoActions = 
  | AddIngredientInfo
  | DeleteIngredientInfo
  ;

export const addIngredientInfo = (payload: Ingredients): AddIngredientInfo => ({
  type: ADD_INGREDIENT_INFO,
  payload,
});

export const deleteIngredientInfo = (): DeleteIngredientInfo => ({
  type: DELETE_INGREDIENT_INFO
});
