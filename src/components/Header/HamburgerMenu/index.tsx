import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Hamburger, Menu } from './styles';

interface HamburgerMenuTooltip {
  handleSignOut: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuTooltip> = ({ handleSignOut }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>

      <Menu open={open}>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default HamburgerMenu;
