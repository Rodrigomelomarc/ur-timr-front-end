import { produce } from 'immer';

import { SIGN_IN_SUCCESS, AuthActionTypes, SIGN_OUT } from '../auth/types';
import { UPDATE_PROFILE_ERROR } from './types';
import {
  ProfileActionTypes,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
} from './types';

export interface ProfileState {
  profile?: {
    id: string;
    name: string;
    email: string;
    avatar_url?: string;
  };
  loading: boolean;
}

const initialState: ProfileState = {
  profile: undefined,
  loading: false,
};

export function profileReducer(
  state = initialState,
  action: AuthActionTypes | ProfileActionTypes,
): ProfileState {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.profile;
        break;
      }
      case SIGN_OUT: {
        draft.profile = undefined;
        break;
      }
      case UPDATE_PROFILE_REQUEST: {
        draft.loading = true;
        break;
      }
      case UPDATE_PROFILE_SUCCESS: {
        draft.profile = action.payload;
        draft.loading = false;
        break;
      }
      case UPDATE_PROFILE_ERROR: {
        draft.loading = false;
        break;
      }
      default:
        break;
    }
  });
}
