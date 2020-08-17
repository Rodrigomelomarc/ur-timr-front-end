import React, { useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiMail, FiKey } from 'react-icons/fi';
import InternalLayout from '../../components/_layouts/internal';
import FormContainer from '../../components/FormContainer';

import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <InternalLayout>
      <Container>
        <FormContainer>
          <Form ref={formRef} onSubmit={() => {}}>
            <img
              src="https://avatars0.githubusercontent.com/u/45365615?s=460&u=37c77136c745fce1e8d7118ead74a1a103bcbc2b&v=4"
              alt=""
            />

            <Input name="name" placeholder="Nome" icon={FiUser} />
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input name="old_password" placeholder="Senha atual" icon={FiKey} />
            <Input name="password" placeholder="Nova senha" icon={FiKey} />
            <Input
              name="password_confirmation"
              placeholder="Confirmar senha"
              icon={FiKey}
            />

            <Button>Confirmar alterações</Button>
          </Form>
        </FormContainer>
      </Container>
    </InternalLayout>
  );
};

export default Profile;
