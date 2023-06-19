import {
  login,
  logout,
  getUser,
  resetToken,
  updateUser,
} from "../../components/api/api";
import { setCookie, deleteCookie } from "../../services/utils";

import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT, USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_FAILED, REFRESH_ACCESS_TOKEN_REQUEST, REFRESH_ACCESS_TOKEN_SUCCESS, REFRESH_ACCESS_TOKEN_FAILED, USER_DATA_UPDATE_REQUEST, USER_DATA_UPDATE_SUCCESS, USER_DATA_UPDATE_FAILED } from "../constants/login";

export function userLogin(user) {
  return function (dispatch) {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    login(user)
      .then((res) => {
        if (res && res.success) {
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: res,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: USER_LOGIN_FAILED,
        });
      });
  };
}

export function logoutUser(goToPage) {
  return function (dispatch) {
    dispatch({
      type: USER_LOGOUT,
    });
    logout().then((res) => {
      if (res && res.success) {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        goToPage();
      }
    });
  };
}

export function getUserData() {
  return function (dispatch) {
    dispatch({
      type: USER_DATA_REQUEST,
    });
    getUser()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: USER_DATA_SUCCESS,
            payload: res,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: USER_DATA_FAILED,
        });
        dispatch(refreshToken());
      });
  };
}

export function refreshToken() {
  return function (dispatch) {
    dispatch({
      type: REFRESH_ACCESS_TOKEN_REQUEST,
    });
    resetToken()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REFRESH_ACCESS_TOKEN_SUCCESS,
            payload: res,
          });
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch(getUserData());
        }
      })
      .catch((e) => {
        dispatch({
          type: REFRESH_ACCESS_TOKEN_FAILED,
        });
      });
  };
}

export function updateUserData(data) {
  return function (dispatch) {
    dispatch({
      type: USER_DATA_UPDATE_REQUEST,
    });
    updateUser(data)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: USER_DATA_UPDATE_SUCCESS,
            payload: res,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: USER_DATA_UPDATE_FAILED,
        });
      });
  };
}
