import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.main`
  height: 100%;
  overflow: auto;
  background: linear-gradient(180deg, #5997f4 0%, rgba(60, 96, 165, 0) 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    animation: ${appear} 0.6s linear;
  }
`;
