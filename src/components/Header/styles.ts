import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  background: #efefef;
  width: 100%;
  display: flex;
  place-content: center;
  padding: 13px 158px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  z-index: 99999;
  @media screen and (max-width: 1040px) {
    padding: 13px 60px;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    flex: 1;
    margin-left: 150px;

    @media screen and (max-width: 1040px) {
      display: none;
    }

    a {
      font-weight: 500;
      color: #7e9be5;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.1, '#7e9be5')};
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

  @media screen and (max-width: 1040px) {
    display: none;
  }

  p {
    color: #7e9be5;
    font-weight: 500;
    font-size: 16px;
  }

  button {
    background: transparent;
    color: #7e9be5;
    margin-top: 14px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.1, '#7e9be5')};
    }
  }
`;
