//Ингредиенты, добавленные в конструктор
import { ADD_INGREDIENT, INGREDIENT_MOVE, DELETE_INGREDIENT, DELETE_ALL_INGREDIENTS, ADD_BUNS } from "../constants/constructor-ingredients";
import { Ingredient } from "../types/types";

// Типизация экшенов
export interface AddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  payload: Ingredient;
}

export interface DeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  payload: string;
}

type IngredientOrder = {
  dragIndex: number;
  hoverIndex: number;
};

export interface IngredientMove {
  readonly type: typeof INGREDIENT_MOVE;
  payload: IngredientOrder;
}

export interface AddBuns {
  readonly type: typeof ADD_BUNS;
  payload: Ingredient[];
}

export interface DeleteAllIngredient {
  readonly type: typeof DELETE_ALL_INGREDIENTS;
}

// Union тип
export type IngrediensConstructorActions =
  | AddIngredient
  | DeleteIngredient
  | IngredientMove
  | AddBuns
  | DeleteAllIngredient
  ;

// Генераторы экшенов
export const addIngredientInConstructor = (payload: Ingredient): AddIngredient => ({
  type: ADD_INGREDIENT,
  payload,
});

export const deleteIngredient = (payload: string): DeleteIngredient => ({
  type: DELETE_INGREDIENT,
  payload,
});

export const moveIngredientInConstructor = (payload: IngredientOrder): IngredientMove => ({
  type: INGREDIENT_MOVE,
  payload,
});

export const addBunsInConstructor = (payload: Ingredient[]): AddBuns => ({
  type: ADD_BUNS,
  payload,
});

export const deleteAllIngredients = (): DeleteAllIngredient => ({
  type: DELETE_ALL_INGREDIENTS,
});
