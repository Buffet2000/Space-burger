import {
  login, logout, getUser,
  resetToken, updateUser
} from "../../components/api/api";
import {
  USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT,
  USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_FAILED,
  REFRESH_ACCESS_TOKEN_REQUEST, REFRESH_ACCESS_TOKEN_SUCCESS, REFRESH_ACCESS_TOKEN_FAILED,
  USER_DATA_UPDATE_REQUEST, USER_DATA_UPDATE_SUCCESS, USER_DATA_UPDATE_FAILED
} from "../constants/login";
import { setCookie, deleteCookie } from "../utils";
import { AppDispatch, AppThunk } from "../types";

type LoginData = {
  accessToken: string,
  refreshToken: string,
  success: boolean,
  user: {
    email: string,
    name: string,
    password?: string
  }
}

// User Login/Logout
export interface UserLoginRequest {
  readonly type: typeof USER_LOGIN_REQUEST;
}
export interface UserLoginSuccess {
  readonly type: typeof USER_LOGIN_SUCCESS;
  payload: LoginData
}
export interface UserLoginFailed {
  readonly type: typeof USER_LOGIN_FAILED;
}
export interface UserLogout {
  readonly type: typeof USER_LOGOUT;
}

export const userLoginRequest = (): UserLoginRequest => ({
  type: USER_LOGIN_REQUEST,
});
export const userLoginSuccess = (payload: LoginData): UserLoginSuccess => ({
  type: USER_LOGIN_SUCCESS,
  payload
});
export const userLoginFailed = (): UserLoginFailed => ({
  type: USER_LOGIN_FAILED,
});
export const userLogout = (): UserLogout => ({
  type: USER_LOGOUT,
});

// User Data
export interface UserDataRequest {
  readonly type: typeof USER_DATA_REQUEST;
}
export interface UserDataSuccess {
  readonly type: typeof USER_DATA_SUCCESS;
  payload: LoginData
}
export interface UserDataFailed {
  readonly type: typeof USER_DATA_FAILED;
}

export const userDataRequest = (): UserDataRequest => ({
  type: USER_DATA_REQUEST,
});
export const userDataSuccess = (payload: LoginData): UserDataSuccess => ({
  type: USER_DATA_SUCCESS,
  payload
});
export const userDataFailed = (): UserDataFailed => ({
  type: USER_DATA_FAILED,
});

// User Data Update
export interface UserDataUpdateRequest {
  readonly type: typeof USER_DATA_UPDATE_REQUEST;
}
export interface UserDataUpdateSuccess {
  readonly type: typeof USER_DATA_UPDATE_SUCCESS;
  payload: LoginData
}
export interface UserDataUpdateFailed {
  readonly type: typeof USER_DATA_UPDATE_FAILED;
}

export const userDataUpdateRequest = (): UserDataUpdateRequest => ({
  type: USER_DATA_UPDATE_REQUEST,
});
export const userDataUpdateSuccess = (payload: LoginData): UserDataUpdateSuccess => ({
  type: USER_DATA_UPDATE_SUCCESS,
  payload
});
export const userDataUpdateFailed = (): UserDataUpdateFailed => ({
  type: USER_DATA_UPDATE_FAILED,
});

// Refresh Token
export interface RefreshAccessTokenRequest {
  readonly type: typeof REFRESH_ACCESS_TOKEN_REQUEST;
}
export interface RefreshAccessTokenSuccess {
  readonly type: typeof REFRESH_ACCESS_TOKEN_SUCCESS;
  payload: LoginData
}
export interface RefreshAccessTokenFailed {
  readonly type: typeof REFRESH_ACCESS_TOKEN_FAILED;
}

export const refreshAccessTokenRequest = (): RefreshAccessTokenRequest => ({
  type: REFRESH_ACCESS_TOKEN_REQUEST,
});
export const refreshAccessTokenSuccess = (payload: LoginData): RefreshAccessTokenSuccess => ({
  type: REFRESH_ACCESS_TOKEN_SUCCESS,
  payload
});
export const refreshAccessTokenFailed = (): RefreshAccessTokenFailed => ({
  type: REFRESH_ACCESS_TOKEN_FAILED,
});

// Union тип
export type LoginActions =
  | UserLoginRequest
  | UserLoginSuccess
  | UserLoginFailed
  | UserLogout
  | UserDataRequest
  | UserDataSuccess
  | UserDataFailed
  | UserDataUpdateRequest
  | UserDataUpdateSuccess
  | UserDataUpdateFailed
  | RefreshAccessTokenRequest
  | RefreshAccessTokenSuccess
  | RefreshAccessTokenSuccess
  | RefreshAccessTokenFailed
  ;

export const userLogin: AppThunk = (user: { email: string, password: string }) => {
  return function (dispatch: AppDispatch) {
    dispatch(userLoginRequest);
    login(user)
      .then((res) => {
        if (res && res.success) {
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch(userLoginSuccess);
        }
      })
      .catch((e) => {
        dispatch(userLoginFailed);
      });
  };
}

export const logoutUser: AppThunk = (goToPage: () => void) => {
  return function (dispatch: AppDispatch) {
    dispatch(userLogout);
    logout().then((res) => {
      if (res && res.success) {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        goToPage();
      }
    });
  };
}

export const getUserData: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(userDataRequest);
    getUser()
      .then((res) => {
        if (res && res.success) {
          dispatch(userDataSuccess);
        }
      })
      .catch((e) => {
        dispatch(userDataFailed);
        dispatch(refreshToken());
      });
  };
}

export const refreshToken: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(refreshAccessTokenRequest);
    resetToken()
      .then((res) => {
        if (res && res.success) {
          dispatch(refreshAccessTokenSuccess);
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch(getUserData());
        }
      })
      .catch((e) => {
        dispatch(refreshAccessTokenFailed);
      });
  };
}

export const updateUserData: AppThunk = (data: { email: string, name: string }) => {
  return function (dispatch: AppDispatch) {
    dispatch(userDataUpdateRequest);
    updateUser(data)
      .then((res) => {
        if (res && res.success) {
          dispatch(userDataUpdateSuccess);
        }
      })
      .catch((e) => {
        dispatch(userDataUpdateFailed);
      });
  };
}
