import React from 'react';

import { Wrapper } from './styles';
import Header from '../../Header/index';

const InternalLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default InternalLayout;
