import { loginUser } from "../../components/api/api"
//Все ингредиенты из запроса к серверу
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export function userLogin(email, password) {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST
    })

    loginUser(email, password).then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          user: res
        })
      }
    }).catch(e => {
      dispatch({
        type: GET_USER_FAILED,
      })
    })
  }
} 