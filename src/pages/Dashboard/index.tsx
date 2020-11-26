import React, { useEffect, useState, useCallback } from 'react';

import { FiEye } from 'react-icons/fi';
import {
  Container,
  Table,
  TasksContainer,
  Footer,
  Description,
} from './styles';
import Timer from './Timer';
import api from '../../services/api';
import NewTask from './NewTask';

export interface Task {
  id: string;
  title: string;
  time_elapsed: number;
  playing: boolean;
  finished: boolean;
  description: string;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = useCallback(async () => {
    const response = await api.get('/tasks/me');

    const { tasks } = response.data;

    setTasks(tasks);
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <Container>
      <TasksContainer>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Timer</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={task.id}>
                <td>{i + 1}</td>
                <td>{task.title}</td>
                <td>
                  <Description title={task.description}>
                    <FiEye size={20} color="#7e9be5" />
                  </Description>
                </td>
                <td>
                  <Timer
                    timeElapsed={task.time_elapsed}
                    taskId={task.id}
                    playing={task.playing}
                    finished={task.finished}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TasksContainer>
      <Footer>
        <NewTask setTasks={setTasks} tasks={tasks} />
      </Footer>
    </Container>
  );
};

export default Dashboard;
