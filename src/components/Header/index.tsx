import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container, Wrapper, HeaderMenu } from './styles';
import { RootState } from '../../store/modules/rootReducer';
import { signOut } from '../../store/modules/auth/actions';
import history from '../../services/history';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector(
    (state: RootState) => state.profile.profile?.name,
  );

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
    history.push('/');
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="UrTimr Logo" />

        <nav>
          <NavLink
            activeStyle={{
              borderBottom: '2px solid #7e9be5',
            }}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            activeStyle={{
              borderBottom: '2px solid #7e9be5',
            }}
            to="/profile"
          >
            Profile
          </NavLink>
        </nav>

        <HeaderMenu>
          <p>{userName}</p>
          <button type="button" onClick={handleSignOut}>
            <FiPower size={24} />
          </button>
        </HeaderMenu>

        <HamburgerMenu handleSignOut={handleSignOut} />
      </Wrapper>
    </Container>
  );
};

export default Header;
