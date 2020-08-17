import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiKey } from 'react-icons/fi';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import logo from '../../assets/logo.svg';

import ExternalLayout from '../../components/_layouts/external/index';
import FormContainer from '../../components/FormContainer/index';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import history from '../../services/history';
import useQuery from '../../hooks/useQuery';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const query = useQuery();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Informe uma nova senha'),
          password_confirmation: Yup.string()
            .required('Confirme sua senha')
            .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, password_confirmation } = data;
        const token = query.get('token');

        await api.post('/password/reset', {
          token,
          password,
          password_confirmation,
        });

        history.push('/');

        toast.success('Senha resetada com sucesso!');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        } else {
          toast.error(error.response.data.message);
        }
      }
    },
    [query],
  );

  return (
    <ExternalLayout>
      <FormContainer>
        <img src={logo} alt="UrTimr Logo" />
        <h1>Resetar senha</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            type="password"
            name="password"
            icon={FiKey}
            placeholder="Nova senha"
          />
          <Input
            type="password"
            name="password_confirmation"
            icon={FiKey}
            placeholder="Nova senha"
          />
          <Button type="submit">Resetar</Button>
        </Form>
      </FormContainer>
    </ExternalLayout>
  );
};

export default ResetPassword;
