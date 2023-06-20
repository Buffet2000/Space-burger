import {
  postForgotPassword,
  postResetPassword,
} from "../../components/api/api";
import {
  VERIFICATION_EMAIL_REQUEST, VERIFICATION_EMAIL_SUCCESS, VERIFICATION_EMAIL_FAILED,
  RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED
} from "../constants/password-reset";
import { AppDispatch, AppThunk } from "../types";

// Verification Email
export interface IVerificationEmailRequest {
  readonly type: typeof VERIFICATION_EMAIL_REQUEST
}
export interface IVerificationEmailSuccess {
  readonly type: typeof VERIFICATION_EMAIL_SUCCESS,
  payload: { success: true, message: 'Reset email sent' }
}
export interface IVerificationEmailFailed {
  readonly type: typeof VERIFICATION_EMAIL_FAILED
}

export const VerificationEmailRequest = (): IVerificationEmailRequest => ({
  type: VERIFICATION_EMAIL_REQUEST
});
export const VerificationEmailSuccess = (payload: { success: true, message: 'Reset email sent' }): IVerificationEmailSuccess => ({
  type: VERIFICATION_EMAIL_SUCCESS,
  payload
});
export const VerificationEmailFailed = (): IVerificationEmailFailed => ({
  type: VERIFICATION_EMAIL_FAILED
});

// Reset Password
export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST
}
export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS
}
export interface IResetPasswordFailed {
  readonly type: typeof RESET_PASSWORD_FAILED
}

export const ResetPasswordRequest = () => ({
  type: RESET_PASSWORD_REQUEST
});
export const ResetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS
});
export const ResetPasswordFailed = () => ({
  type: RESET_PASSWORD_FAILED
});

export const sentVerificationEmail: AppThunk = (email, goToPage) => {
  return function (dispatch: AppDispatch) {
    dispatch(VerificationEmailRequest);
    postForgotPassword(email)
      .then((res) => {
        if (res && res.success) {
          dispatch(VerificationEmailSuccess(res));
        }
      })
      .then(goToPage)
      .catch((e) => {
        dispatch(VerificationEmailFailed);
      });
  };
}

export const resetPassword: AppThunk = (password, token) => {
  return function (dispatch: AppDispatch) {
    dispatch(ResetPasswordRequest);
    postResetPassword(password, token)
      .then((res) => {
        if (res && res.success) {
          dispatch(ResetPasswordSuccess);
        }
      })
      .catch((e) => {
        dispatch(ResetPasswordFailed);
      });
  };
}
