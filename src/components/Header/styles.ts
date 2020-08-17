import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  background: #7e9be5;
  width: 100%;
  display: flex;
  place-content: center;
  padding: 13px 158px;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    flex: 1;
    margin-left: 150px;

    a {
      font-weight: 500;
      color: #e2e1e1;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.1, '#e2e1e1')};
      }

      & + a {
        margin-left: 45px;
      }
    }
  }
`;

export const HeaderMenu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #e2e1e1;
    font-weight: 500;
    font-size: 16px;
  }

  button {
    background: transparent;
    color: #e2e1e1;
    margin-top: 14px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.1, '#e2e1e1')};
    }
  }
`;
