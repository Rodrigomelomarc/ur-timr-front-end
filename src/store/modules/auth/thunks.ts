import { toast } from 'react-toastify';

import { AppThunk } from '../..';
import { signInRequest, signInSuccess, signInError } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

interface SignInData {
  email: string;
  password: string;
}

export const thunkSignInRequest = ({
  email,
  password,
}: SignInData): AppThunk => async (dispatch) => {
  dispatch(signInRequest);

  try {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    dispatch(signInSuccess({ token, profile: user }));

    history.push('/dashboard');
  } catch (e) {
    dispatch(signInError);

    toast.error(e.response.data.message);
  }
};
