import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    min-width: 18rem;
    padding: 1.2rem;
    background: #7e9be5;
    font-size: 1.4rem;
    border-radius: 1rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s;

    bottom: calc(100% + 1.2rem);
    left: 50%;
    transform: translateX(-50%);

    color: #403d3d;
    align-items: center;

    &::before {
      content: '';
      border-style: solid;
      border-color: #7e9be5 transparent;
      border-width: 0.8rem 0.8rem 0 0.8rem;

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      @media screen and (max-width: 320px) {
        left: 67%;
      }
    }

    @media screen and (max-width: 600px) {
      min-width: 15rem;
    }

    @media screen and (max-width: 320px) {
      left: 70%;
      transform: translateX(-70%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 320px) {
    left: -30%;
  }
`;
