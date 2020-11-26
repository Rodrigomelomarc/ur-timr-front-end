import styled from 'styled-components';

interface FormContainerProps {
  open?: boolean;
}

export const Container = styled.div`
  position: absolute;
  bottom: 90%;
  right: 10%;

  > button {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #7e9be5;
    position: absolute;
    right: 0%;
    bottom: 5%;

    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const FormContainer = styled.div<FormContainerProps>`
  width: 340px;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e4e4e4;
  border-radius: 10px;
  position: absolute;
  right: 5%;
  bottom: calc(100% + 85px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};

  transition: all 0.3s ease;

  h3 {
    color: #7e9be5;
  }
`;
