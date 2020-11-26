import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 478px;
  background-color: #7e9be5;
  color: #e2e1e1;
  padding: 18px 0;
  line-height: 24px;
  font-weight: 500;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    width: 378px;
  }

  @media (max-width: 425px) {
    width: 300px;
    padding: 15px 0;
  }

  @media (max-width: 320px) {
    width: 250px;
    padding: 13px 0;
  }

  &:hover {
    background-color: ${shade(0.1, '#7e9be5')};
  }
`;
