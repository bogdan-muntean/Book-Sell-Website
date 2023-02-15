import React from 'react'
import "./Menu-Buttons.css"

import IconShopCart from '../Icon-ShopCart/Icon-ShopCart'

function MenuButtons() {
    return (
        <div className='menu-buttons-container'>
            <div className='menu-buttons-option'>Acasa</div>
            <div className='menu-buttons-option'>Pagini</div>
            <div className='menu-buttons-option'>Despre</div>
            <div className='menu-buttons-option'>Servicii</div>
            <div className='menu-buttons-option'>Contact</div>
            <IconShopCart></IconShopCart>
        </div>
      )
}

export default MenuButtons