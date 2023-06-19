import { getIngredients } from "../../components/api/api";
import { AppDispatch, AppThunk } from '../../types';
//Все ингредиенты из запроса к серверу
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../constants/all-ingredients";

export 

export function getIngredientsData() {
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
}
