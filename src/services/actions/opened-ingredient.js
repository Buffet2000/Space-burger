import { ADD_INGREDIENT_INFO, DELETE_INGREDIENT_INFO } from "../constants/opened-ingredient"; 

export const addIngredientInfo = (payload) => ({
  type: ADD_INGREDIENT_INFO,
  payload,
});
export const deleteIngredientInfo = () => ({ type: DELETE_INGREDIENT_INFO });
