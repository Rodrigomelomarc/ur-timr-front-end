import { toast } from 'react-toastify';
import { AppThunk } from '../..';
import api from '../../../services/api';
import history from '../../../services/history';
import {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileError,
} from './actions';

interface UpdateProfileData {
  avatar?: File;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
  password_confirmation?: string;
}

export const thunkUpdateProfileRequest = (
  data: UpdateProfileData,
): AppThunk => async (dispatch) => {
  dispatch(updateProfileRequest());
  try {
    if (data.avatar) {
      const avatarData = new FormData();
      avatarData.append('avatar', data.avatar);

      await api.patch('/avatar', avatarData);
    }

    const response = await api.put('/profile', {
      name: data.name,
      email: data.email,
      ...(data.old_password && {
        old_password: data.old_password,
        password: data.password,
        password_confirmation: data.password_confirmation,
      }),
    });

    dispatch(updateProfileSuccess(response.data));

    toast.success('Perfil alterado com sucesso');

    history.push('/dashboard');
  } catch (e) {
    dispatch(updateProfileError());
    toast.error(e.response.data.message);
  }
};
