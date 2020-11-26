import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    min-width: 180px;
    padding: 12px;
    background: #7e9be5;
    font-size: 14px;
    border-radius: 10px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s;

    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #403d3d;
    align-items: center;

    &::before {
      content: '';
      border-style: solid;
      border-color: #7e9be5 transparent;
      border-width: 8px 8px 0 8px;

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }

    @media screen and (max-width: 768px) {
      min-width: 150px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
