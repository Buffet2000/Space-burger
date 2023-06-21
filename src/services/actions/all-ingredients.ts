import { getIngredients } from "../../components/api/api";
import { AppDispatch, AppThunk } from "../types";
import { Ingredient } from "../types/types";

import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../constants/all-ingredients";

//Типизация экшенов
export interface GetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface GetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  payload: Ingredient[],
}

export interface GetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

//Объединение типов
export type IngredientsDataActions = 
  | GetIngredientsRequest
  | GetIngredientsSuccess
  | GetIngredientsFailed;

export const getIngredientsRequest = (): GetIngredientsRequest => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (payload: Ingredient[]): GetIngredientsSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload
});

export const getIngredientsFailed = (): GetIngredientsFailed => ({
  type: GET_INGREDIENTS_FAILED,
});

//Все ингредиенты из запроса к серверу
export const getIngredientsData: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getIngredientsRequest())
  getIngredients().then(res => {
    if (res && res.success) {
      dispatch(getIngredientsSuccess(res.data))
    }
  }).catch(e => {
    dispatch(getIngredientsFailed())
  })
}