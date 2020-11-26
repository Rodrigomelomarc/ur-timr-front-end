import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #333a52;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  margin-right: 30px;

  button disabledsvg {
    width: 18px;
    height: 18px;
  }

  button + button {
    margin-left: 13px;
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

interface ClockProps {
  finished: boolean;
}

export const Clock = styled.div<ClockProps>`
  color: #7e9be5;
  display: flex;
  align-items: center;

  ${(props) =>
    props.finished &&
    css`
      opacity: 0.4;
    `}
`;
