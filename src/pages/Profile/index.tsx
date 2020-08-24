import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiMail, FiKey } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import FormContainer from '../../components/FormContainer';

import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ImageInput from '../../components/ImageInput';
import { RootState } from '../../store/modules/rootReducer';
import getValidationErrors from '../../utils/getValidationErrors';
import { thunkUpdateProfileRequest } from '../../store/modules/profile/thunks';

interface DashboardFormData {
  avatar?: File;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
  password_confirmation?: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const profile = useSelector((state: RootState) => state.profile.profile);

  const handleFormSubmit = useCallback(
    async (data: DashboardFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um email válido')
            .required('E-mail obrigatório'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: true,
            then: Yup.string().required('Você deve informar uma nova senha'),
          }),
          password_confirmation: Yup.string().when('old_password', {
            is: true,
            then: Yup.string().required('Confirme sua nova senha'),
          }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          avatar,
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          ...(avatar && { avatar }),
          name,
          email,
          ...(old_password && {
            old_password,
            password,
            password_confirmation,
          }),
        };

        dispatch(thunkUpdateProfileRequest(formData));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [dispatch],
  );

  return (
    <Container>
      <FormContainer>
        <Form
          ref={formRef}
          onSubmit={handleFormSubmit}
          initialData={{
            name: profile?.name,
            email: profile?.email,
            avatar: profile?.avatar_url,
          }}
        >
          <ImageInput name="avatar" />

          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            containerStyle={{ marginTop: '36px' }}
            type="password"
            name="old_password"
            placeholder="Senha atual"
            icon={FiKey}
          />
          <Input
            type="password"
            name="password"
            placeholder="Nova senha"
            icon={FiKey}
          />
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirmar senha"
            icon={FiKey}
          />

          <Button type="submit">Confirmar alterações</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Profile;
