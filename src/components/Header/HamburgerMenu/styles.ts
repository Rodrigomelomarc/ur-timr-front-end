import styled from 'styled-components';
import { shade } from 'polished';

interface HamburgerProps {
  open: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Hamburger = styled.div<HamburgerProps>`
  display: flex;
  padding: 5px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  div {
    width: 24px;
    height: 3px;
    background: #7e9be5;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease;

    & + div {
      margin-top: 5px;
    }

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(40px)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media screen and (min-width: 1041px) {
    display: none;
  }
`;

export const Menu = styled.div<HamburgerProps>`
  position: absolute;
  top: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
  background: #efefef;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  z-index: 99999;

  padding: 10px 15px;
  align-items: center;
  display: ${({ open }) => (open ? 'block' : 'none')};

  @media screen and (min-width: 1041px) {
    display: none;
  }

  &::before {
    content: '';
    border-style: solid;
    border-color: #efefef transparent;
    border-width: 0 8px 8px 8px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100%;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;

    li a {
      font-weight: 500;
      color: #7e9be5;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.1, '#7e9be5')};
      }
    }

    li button {
      color: #7e9be5;
    }
  }
`;
