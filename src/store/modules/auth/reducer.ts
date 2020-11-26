import { produce } from 'immer';
import { SIGN_OUT } from './types';

import {
  AuthActionTypes,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from './types';

export interface AuthState {
  loading: boolean;
  token: string;
  signed: boolean;
}

const initialState: AuthState = {
  loading: false,
  token: '',
  signed: false,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes,
): AuthState {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_REQUEST:
        draft.loading = true;
        break;
      case SIGN_IN_SUCCESS: {
        const { token } = action.payload;

        draft.loading = false;
        draft.signed = true;
        draft.token = token;
        break;
      }
      case SIGN_IN_ERROR:
        draft.loading = false;
        break;
      case SIGN_OUT: {
        draft.signed = false;
        draft.token = '';
        break;
      }
      default:
        break;
    }
  });
}
