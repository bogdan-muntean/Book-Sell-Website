import React from 'react';
import './Header.css';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

function Header() {
  return (
    <div className='header'>
        <Logo colorIcon="var(--color-second)"></Logo>
        <Menu></Menu>
    </div>
  )
}

export default Header