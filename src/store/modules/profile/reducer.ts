import { produce } from 'immer';

import { SIGN_IN_SUCCESS, AuthActionTypes } from '../auth/types';

export interface ProfileState {
  profile?: {
    id: string;
    name: string;
    email: string;
    avatar_url?: string;
  };
}

const initialState: ProfileState = {
  profile: undefined,
};

export function profileReducer(
  state = initialState,
  action: AuthActionTypes,
): ProfileState {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.profile;
        break;
      }
      default:
        break;
    }
  });
}
