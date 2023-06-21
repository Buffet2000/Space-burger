//Ингредиенты, добавленные в конструктор
import { ADD_INGREDIENT, INGREDIENT_MOVE, DELETE_INGREDIENT, DELETE_ALL_INGREDIENTS, ADD_BUNS } from "../constants/constructor-ingredients";
// список всех ингредиентов в текущем конструкторе бургера,
import { Ingredients } from "../types/types";
//типизация экшенов
export interface AddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  payload: Ingredients
}

export interface DeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  payload: string
}

type IngredientOrder = {
  dragIndex: number,
  hoverIndex: number
};

export interface IngredientMove {
  readonly type: typeof INGREDIENT_MOVE;
  payload: IngredientOrder
}

export interface AddBuns {
  readonly type: typeof ADD_BUNS;
  payload: Array<Ingredients>
}

export interface DeleteAllIngredient {
  readonly type: typeof DELETE_ALL_INGREDIENTS;
}

// Объединение типов
export type IngrediensConstructorActions = 
  | AddIngredient
  | DeleteIngredient
  | IngredientMove
  | AddBuns
  | DeleteAllIngredient
  ;

// Генераторы экшенов
export const addIngredientInConstructor = (payload: Ingredients): AddIngredient => ({
  type: ADD_INGREDIENT,
  payload
});

export const deleteIngredient = (payload: string): DeleteIngredient => ({
  type: DELETE_INGREDIENT,
  payload
});

export const moveIngredientInConstructor = (payload: IngredientOrder): IngredientMove => ({
  type: INGREDIENT_MOVE,
  payload
});

export const addBunsInConstructor = (payload: Array<Ingredients>): AddBuns => ({
  type: ADD_BUNS,
  payload
});

export const deleteAllIngredients = (): DeleteAllIngredient => ({
  type: DELETE_ALL_INGREDIENTS
});
