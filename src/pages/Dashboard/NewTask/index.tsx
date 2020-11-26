import React, { useRef, useCallback, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, FormContainer } from './styles';

import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import { Task } from '../index';
import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';

interface NewTaskProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

interface NewTaskFormData {
  title: string;
  description: string;
}

const NewTask: React.FC<NewTaskProps> = ({ setTasks, tasks }) => {
  const [open, setOpen] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: NewTaskFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Título obrigatório'),
        description: Yup.string().required('Descrição obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { title, description } = data;

      await api.post('/tasks', {
        title,
        description,
      });

      formRef.current?.reset();
      setOpen(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <FormContainer open={open}>
        <h3>Nova Tarefa</h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="title"
            placeholder="Titulo"
            containerStyle={{ width: '290px' }}
          />
          <TextArea
            name="description"
            placeholder="Descrição..."
            containerStyle={{ width: '290px' }}
            rows={5}
          />
          <Button
            type="submit"
            containerStyle={{ width: '290px', marginTop: '24px' }}
          >
            Criar
          </Button>
        </Form>
      </FormContainer>
      <button type="button" onClick={() => setOpen(!open)}>
        <FiPlus size={30} color="#fff" />
      </button>
    </Container>
  );
};

export default NewTask;
