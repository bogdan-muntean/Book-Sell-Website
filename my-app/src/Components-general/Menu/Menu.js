import React from 'react';
import './Menu.css';

import MenuButtons from '../Menu-Buttons/Menu-Buttons';
import BtnRectangular from '../BtnRectangular/BtnRectangular';

function Menu() {
  return (
    <div className='menu-container'>
      <MenuButtons></MenuButtons>
      <BtnRectangular text="Comanda Acum"></BtnRectangular>
    </div>
  )
}

export default Menu