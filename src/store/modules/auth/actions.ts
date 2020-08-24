import {
  SIGN_IN_ERROR,
  AuthActionTypes,
  SIGN_OUT,
  SIGN_IN_REQUEST,
  SignInSuccessPayload,
  SIGN_IN_SUCCESS,
} from './types';

export function signInRequest(): AuthActionTypes {
  return {
    type: SIGN_IN_REQUEST,
  };
}

export function signInSuccess(data: SignInSuccessPayload): AuthActionTypes {
  return {
    type: SIGN_IN_SUCCESS,
    payload: data,
  };
}

export function signInError(): AuthActionTypes {
  return {
    type: SIGN_IN_ERROR,
  };
}

export function signOut(): AuthActionTypes {
  return {
    type: SIGN_OUT,
  };
}
