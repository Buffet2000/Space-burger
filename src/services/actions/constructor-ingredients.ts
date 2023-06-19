//Ингредиенты, добавленные в конструктор
import { ADD_INGREDIENT, INGREDIENT_MOVE, DELETE_INGREDIENT, DELETE_ALL_INGREDIENTS, ADD_BUNS } from "../constants/constructor-ingredients";



export const addIngredientInConstructor = (payload) => ({
  type: ADD_INGREDIENT,
  payload,
});
export const moveIngredientInConstructor = (payload) => ({
  type: INGREDIENT_MOVE,
  payload,
});
export const deleteIngredient = (payload) => ({
  type: DELETE_INGREDIENT,
  payload,
});
export const deleteAllIngredients = () => ({ type: DELETE_ALL_INGREDIENTS });
export const addBunsInConstructor = (payload) => ({ type: ADD_BUNS, payload });
