import { getIngredients } from "../../components/api/api";
import { AppDispatch, AppThunk } from "../types";
import { Ingredients } from "../types/types";

import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../constants/all-ingredients";

//Типизация экшенов
export interface GetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface GetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  payload: Array<Ingredients>
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

export const getIngredientsSuccess = (payload: Ingredients[]): GetIngredientsSuccess => ({
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