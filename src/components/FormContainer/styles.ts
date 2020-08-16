import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  min-width: 51.7rem;
  padding: 1rem 4rem;
  background-color: #e4e4e4;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    min-width: 4rem;
    padding: 1rem 3rem;
  }

  @media screen and (max-width: 425px) {
    min-width: 3rem;
    padding: 1rem 2rem;
  }

  h1 {
    color: #403d3d;
    font-size: 2.3rem;
    margin: 1.4rem 0 4rem 0;
  }

  button {
    margin-top: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      font-weight: 500;
      color: #403d3d;
      font-size: 1.6rem;
      margin-top: 3.5rem;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#403d3d')};
      }
    }
  }

  > a {
    font-weight: 500;
    color: #7e9be5;
    font-size: 1.6rem;
    margin-top: 4.2rem;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#7e9be5')};
    }

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }
`;
