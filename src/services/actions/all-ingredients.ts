import { getIngredients } from "../../components/api/api";
import { AppDispatch, AppThunk } from "../types";
import { TIngredients } from "../types/types";

import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../constants/all-ingredients";

/*export function getIngredientsData() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    getIngredients()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
}*/

//Типизация экшенов
export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  payload: Array<TIngredients>
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

//Объединение типов
export type TIngredientsDataActions = 
  IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed;

export const getIngredientsRequest = (): IGetIngredientsRequest => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (payload: Array<TIngredients>): IGetIngredientsSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload
});

export const getIngredientsFailed = (): IGetIngredientsFailed => ({
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