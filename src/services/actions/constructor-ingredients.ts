//Ингредиенты, добавленные в конструктор
import { ADD_INGREDIENT, INGREDIENT_MOVE, DELETE_INGREDIENT, DELETE_ALL_INGREDIENTS, ADD_BUNS } from "../constants/constructor-ingredients";
// список всех ингредиентов в текущем конструкторе бургера,
import { TIngredients } from "../types/types";
//типизация экшенов
export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  payload: TIngredients
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  payload: string
}

type IngredientOrder = {
  dragIndex: number,
  hoverIndex: number
};

export interface IIngredientMove {
  readonly type: typeof INGREDIENT_MOVE;
  payload: IngredientOrder
}

export interface IAddBuns {
  readonly type: typeof ADD_BUNS;
  payload: Array<TIngredients>
}

export interface IDeleteAllIngredient {
  readonly type: typeof DELETE_ALL_INGREDIENTS;
}

// Объединение типов
export type TIngrediensConstructorActions = 
  | IAddIngredient
  | IDeleteIngredient
  | IIngredientMove
  | IAddBuns
  | IDeleteAllIngredient
  ;

// Генераторы экшенов
export const addIngredientInConstructor = (payload: TIngredients): IAddIngredient => ({
  type: ADD_INGREDIENT,
  payload
});

export const deleteIngredient = (payload: string): IDeleteIngredient => ({
  type: DELETE_INGREDIENT,
  payload
});

export const moveIngredientInConstructor = (payload: IngredientOrder): IIngredientMove => ({
  type: INGREDIENT_MOVE,
  payload
});

export const addBunsInConstructor = (payload: Array<TIngredients>): IAddBuns => ({
  type: ADD_BUNS,
  payload
});

export const deleteAllIngredients = (): IDeleteAllIngredient => ({
  type: DELETE_ALL_INGREDIENTS
});
