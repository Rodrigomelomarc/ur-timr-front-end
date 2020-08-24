import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiKey, FiUser, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.svg';

import FormContainer from '../../components/FormContainer/index';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import history from '../../services/history';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Digite um email válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
        password_confirmation: Yup.string()
          .required('Confirme sua senha')
          .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/profile', data);

      history.push('/');

      toast.success('Perfil criado com sucesso! Realize o primeiro login');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      } else {
        toast.error(error.response.data.message);
      }
    }
  }, []);

  return (
    <FormContainer>
      <img src={logo} alt="UrTimr Logo" />
      <h1>Cadastre-se</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          icon={FiKey}
          placeholder="Senha"
        />
        <Input
          name="password_confirmation"
          type="password"
          icon={FiKey}
          placeholder="Confirmar senha"
        />

        <Button type="submit">Cadastrar</Button>
      </Form>

      <Link to="/">
        <FiArrowLeft />
        Voltar para o login
      </Link>
    </FormContainer>
  );
};

export default SignUp;
