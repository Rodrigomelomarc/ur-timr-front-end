import React, { useState, useEffect, useCallback } from 'react';

import { FiPlay, FiSquare, FiPause } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Container, Controls, Clock } from './styles';
import api from '../../../services/api';

interface TimerProps {
  timeElapsed: number;
  taskId: string;
  playing: boolean;
  finished: boolean;
}

interface ClockTime {
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

const Timer: React.FC<TimerProps> = ({
  timeElapsed,
  taskId,
  playing,
  finished,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(playing);
  const [isFinished, setisFinished] = useState<boolean>(finished);
  const [timeInSeconds, setTimeInSeconds] = useState<number>(timeElapsed);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [clockTime, setClockTime] = useState<ClockTime>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const fillClockTime = useCallback(() => {
    if (!timeInSeconds) {
      setClockTime({ hours: '00', minutes: '00', seconds: '00' });
      return;
    }

    const hours: number = Math.floor(timeInSeconds / 3600);
    const minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
    const seconds: number = timeInSeconds - hours * 3600 - minutes * 60;

    setClockTime({
      hours: `0${hours}`.slice(-2),
      minutes: `0${minutes}`.slice(-2),
      seconds: `0${seconds}`.slice(-2),
    });
  }, [timeInSeconds]);

  useEffect(() => {
    fillClockTime();
  }, [fillClockTime]);

  useEffect(() => {
    setTimeInSeconds(timeElapsed);
  }, [timeElapsed]);

  const playClock = useCallback(async () => {
    if (isPlaying) return;

    await api.put(`/tasks/${taskId}/play`);

    const interval: any = setInterval(() => {
      setTimeInSeconds((prevState: number) => prevState + 1);
    }, 1000);

    setIntervalId(interval);
    setIsPlaying(true);
  }, [taskId, isPlaying]);

  const pauseClock = useCallback(async () => {
    if (!isPlaying) return;

    clearInterval(intervalId);
    await api.put(`/tasks/${taskId}/pause`, {
      time_elapsed: timeInSeconds,
    });
    setIsPlaying(false);
  }, [isPlaying, intervalId, taskId, timeInSeconds]);

  const finishTask = useCallback(async () => {
    if (isPlaying) {
      toast.error('Pause a tarefa antes de finalizar!');
      return;
    }

    await api.put(`/tasks/${taskId}/finish`);
    setisFinished(true);
  }, [isPlaying, taskId]);

  useEffect(() => {
    window.addEventListener('beforeunload', pauseClock);

    return () => {
      window.removeEventListener('beforeunload', pauseClock);
    };
  }, [pauseClock]);

  return (
    <Container>
      <Controls>
        <button
          type="button"
          onClick={playClock}
          disabled={isPlaying || isFinished}
        >
          <FiPlay color="#1F5F14" />
        </button>
        <button
          type="button"
          onClick={pauseClock}
          disabled={!isPlaying || isFinished}
        >
          <FiPause color="#FE7A00" />
        </button>
        <button type="button" onClick={finishTask} disabled={isFinished}>
          <FiSquare color="#C31212" />
        </button>
      </Controls>
      <Clock finished={isFinished}>
        <p>{clockTime.hours}</p>:<p>{clockTime.minutes}</p>:
        <p>{clockTime.seconds}</p>
      </Clock>
    </Container>
  );
};

export default Timer;
