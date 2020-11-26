import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;

    margin-bottom: 42px;
  }

  label {
    position: absolute;
    width: 50px;
    height: 50px;
    background: #7e9be5;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 59%;
    left: 70%;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#7e9be5')};
    }

    input {
      display: none;
    }
  }
`;

export const AvatarPlaceholder = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;

  margin-bottom: 42px;
  background: #d2d1d1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 65px;
    height: 65px;
    color: #9a9191;
  }

  span {
    display: block;
    color: #9a9191;
    font-weight: 500;
  }
`;
