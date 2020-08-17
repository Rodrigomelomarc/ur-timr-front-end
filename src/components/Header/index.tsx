import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container, Wrapper, HeaderMenu } from './styles';
import { RootState } from '../../store/modules/rootReducer';

const Header: React.FC = () => {
  const userName = useSelector(
    (state: RootState) => state.profile.profile?.name,
  );

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="UrTimr Logo" />

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <HeaderMenu>
          <p>{userName}</p>
          <button type="button">
            <FiPower size={24} />
          </button>
        </HeaderMenu>
      </Wrapper>
    </Container>
  );
};

export default Header;
