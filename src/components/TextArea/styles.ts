import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFilled: boolean;
  isSelected: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 478px;
  padding: 15.5px 29px;
  background-color: #d2d1d1;
  border-radius: 50px;
  color: #9a9191;

  display: flex;
  align-items: center;

  border: 2px solid transparent;

  @media screen and (max-width: 768px) {
    width: 378px;
    font-size: 10px;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
    padding: 12.5px 26px;
  }

  @media screen and (max-width: 320px) {
    width: 250px;
    padding: 10.5px 24px;
  }

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
    margin-top: 14px;
  }

  svg {
    margin-right: 16px;
  }

  textarea {
    flex: 1;
    color: #403d3d;
    background-color: transparent;

    @media screen and (max-width: 768px) {
      max-width: 77%;
    }

    @media screen and (max-width: 425px) {
      max-width: 70%;
    }

    @media screen and (max-width: 320px) {
      max-width: 62%;
    }

    &::placeholder {
      color: #9a9191;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

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
