import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.svg';

import ExternalLayout from '../../components/_layouts/external/index';
import FormContainer from '../../components/FormContainer/index';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import history from '../../services/history';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(async (data: ForgotPasswordFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('E-mail obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLoading(true);
      await api.post('/password/forgot', data);
      setLoading(false);

      history.push('/');

      toast.info('Foi enviado um link de recuperação para seu email!');
    } catch (error) {
      setLoading(false);
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      } else {
        toast.error(error.response.data.message);
      }
    }
  }, []);

  return (
    <ExternalLayout>
      <FormContainer>
        <img src={logo} alt="UrTimr Logo" />
        <h1>Recuperar senha</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Button type="submit" loading={loading}>
            Recuperar
          </Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </FormContainer>
    </ExternalLayout>
  );
};

export default ForgotPassword;
