import React, { ButtonHTMLAttributes } from 'react';

import { CSSProperties } from 'styled-components';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  containerStyle?: CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  containerStyle,
  ...rest
}) => (
  <Container style={containerStyle} type="button" {...rest} disabled={loading}>
    {loading ? 'Carregando' : children}
  </Container>
);

export default Button;
