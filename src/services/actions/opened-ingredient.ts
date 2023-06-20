import { ADD_INGREDIENT_INFO, DELETE_INGREDIENT_INFO } from "../constants/opened-ingredient";
import { TIngredients } from "../types/types";

export interface IAddIngredientInfo {
  readonly type: typeof ADD_INGREDIENT_INFO;
  payload: TIngredients
}

export interface IDeleteIngredientInfo {
  readonly type: typeof DELETE_INGREDIENT_INFO;
}

// Union тип
export type TIngredientInfoActions = 
  | IAddIngredientInfo
  | IDeleteIngredientInfo
  ;

export const addIngredientInfo = (payload: TIngredients): IAddIngredientInfo => ({
  type: ADD_INGREDIENT_INFO,
  payload,
});

export const deleteIngredientInfo = (): IDeleteIngredientInfo => ({
  type: DELETE_INGREDIENT_INFO
});
