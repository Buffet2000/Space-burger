import {
  postForgotPassword,
  postResetPassword,
} from "../../components/api/api";
import { VERIFICATION_EMAIL_REQUEST, VERIFICATION_EMAIL_SUCCESS, VERIFICATION_EMAIL_FAILED, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED } from "../constants/password-reset";

export function sentVerificationEmail(email, goToPage) {
  return function (dispatch) {
    dispatch({
      type: VERIFICATION_EMAIL_REQUEST,
    });
    postForgotPassword(email)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: VERIFICATION_EMAIL_SUCCESS,
            payload: res,
          });
        }
      })
      .then(goToPage)
      .catch((e) => {
        dispatch({
          type: VERIFICATION_EMAIL_FAILED,
        });
      });
  };
}

export function resetPassword(password, token) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    postResetPassword(password, token)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
        });
      });
  };
}
