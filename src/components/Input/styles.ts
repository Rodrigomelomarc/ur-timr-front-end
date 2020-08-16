import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFilled: boolean;
  isSelected: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 43.8rem;
  height: 5.7rem;
  padding: 2.0rem 3.2rem;
  background-color: #d2d1d1;
  border-radius: 5.0rem;
  color: #9a9191;

  display: flex;
  align-items: center;

  border: 0.2rem solid transparent;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #a02424;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      color: #7e9be5;
      border-color: #7e9be5;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #7e9be5;
    `}

  & + div {
    margin-top: 1.4rem;
  }

  svg {
    margin-right: 1.6rem;
  }

  input {
    flex: 1;
    color: #403d3d;
    background-color: transparent;

    &::placeholder {
      color: #9a9191;
    }
  }

  @media screen and (max-width: 600px) {
    width: 37.8rem;
  }

  @media screen and (max-width: 425px) {
    width: 30.0rem;
    height: 5.0rem;
  }

  @media screen and (max-width: 320px) {
    width: 25.0rem;
    height: 4.0rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 2rem;

  svg {
    margin: 0;
  }

  span {
    background: #a02424;
    color: #fff;

    &::before {
      border-color: #a02424 transparent;
    }
  }
`;
