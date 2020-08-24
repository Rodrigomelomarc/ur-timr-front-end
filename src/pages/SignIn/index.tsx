import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLogIn, FiKey } from 'react-icons/fi';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import FormContainer from '../../components/FormContainer/index';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { thunkSignInRequest } from '../../store/modules/auth/thunks';
import { RootState } from '../../store/modules/rootReducer';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const loading: boolean = useSelector(
    (state: RootState) => state.auth.loading,
  );
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password } = data;

        dispatch(thunkSignInRequest({ email, password }));
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
    <FormContainer>
      <img src={logo} alt="UrTimr Logo" />
      <h1>Faça seu login</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          icon={FiKey}
          placeholder="Senha"
        />

        <Button type="submit" loading={loading}>
          Entrar
        </Button>
        <Link to="/forgot_password">Esqueci minha senha</Link>
      </Form>

      <Link to="/signup">
        <FiLogIn />
        Criar conta
      </Link>
    </FormContainer>
  );
};

export default SignIn;
