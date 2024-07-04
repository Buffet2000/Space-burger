import { ADD_INGREDIENT_INFO, DELETE_INGREDIENT_INFO } from "../constants/opened-ingredient";
import { Ingredient } from "../types/types";

export interface AddOpenedIngredientInfo {
  readonly type: typeof ADD_INGREDIENT_INFO;
  payload: Ingredient
}

export interface DeleteOpenedIngredientInfo {
  readonly type: typeof DELETE_INGREDIENT_INFO;
}

// Union тип
export type OpenedIngredientInfoActions = 
  | AddOpenedIngredientInfo
  | DeleteOpenedIngredientInfo
  ;

export const addOpenedIngredientInfo = (payload: Ingredient): AddOpenedIngredientInfo => ({
  type: ADD_INGREDIENT_INFO,
  payload,
});

export const deleteOpenedIngredientInfo = (): DeleteOpenedIngredientInfo => ({
  type: DELETE_INGREDIENT_INFO
});
