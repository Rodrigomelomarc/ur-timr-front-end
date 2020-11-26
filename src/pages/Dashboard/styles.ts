import styled from 'styled-components';
import Tooltip from '../../components/Tooltip/index';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const TasksContainer = styled.div`
  height: 100%;
  width: 932px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Table = styled.table`
  margin-top: 117px;
  width: 100%;

  border-spacing: 0 15px;
  border-collapse: separate;

  th {
    color: #9a9191;
    font-size: 19px;

    &:nth-child(2) {
      text-align: left;
      padding-left: 35px;
      white-space: nowrap;
    }
  }

  tbody tr {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.4s;
  }

  tbody tr:hover {
    transform: translateY(1.5px);
  }

  td {
    background: #e4e4e4;
    color: #7e9be5;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding: 20px 40px;

    &:first-child {
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }

    &:last-child {
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      padding-left: 130px;
    }

    &:nth-child(2) {
      text-align: left;
      padding-left: 35px;
      white-space: nowrap;
      width: 5%;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0%;
`;

export const Description = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #efefef;
    color: #7e9be5;

    &::before {
      border-color: #efefef transparent;
    }
  }
`;
