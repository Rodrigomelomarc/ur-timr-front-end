import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 5.7rem;
  width: 43.7rem;
  background-color: #7e9be5;
  color: #e2e1e1;
  font-weight: 500;
  border-radius: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  @media (max-width: 600px) {
    width: 37.8rem;
  }

  @media (max-width: 425px) {
    width: 30rem;
    height: 5rem;
  }

  @media (max-width: 320px) {
    width: 25rem;
    height: 4rem;
  }

  &:hover {
    background-color: ${shade(0.1, '#7e9be5')};
  }
`;
