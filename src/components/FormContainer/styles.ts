import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  max-width: 517px;
  padding: 10px 20px;
  background-color: #e4e4e4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }

  @media screen and (max-width: 425px) {
    max-width: 330px;
    padding: 10px 15px;
  }

  h1 {
    color: #403d3d;
    font-size: 23px;
    margin: 14px 0 40px 0;
  }

  button {
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      font-weight: 500;
      color: #403d3d;
      font-size: 16px;
      margin-top: 35px;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#403d3d')};
      }
    }
  }

  > a {
    font-weight: 500;
    color: #7e9be5;
    font-size: 16px;
    margin-top: 42px;
    transition: color 0.2s;

    svg {
      margin-right: 5px;
    }

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#7e9be5')};
    }
  }
`;
