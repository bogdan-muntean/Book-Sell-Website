import React from 'react'
import "./Icon-ShopCart.css"

function IconShopCart(props) {
  return (
    <div className='icon-shopcart-container'>
        {/* <div className='icon-shopcart'></div> */}
        <span class="icon-shopcart material-symbols-outlined">shopping_cart</span>
        <div className='icon-shopcart-product-number'>{props.productsNumber}</div>
    </div>
  )
}

IconShopCart.defaultProps = {
    productsNumber: "01",
}

export default IconShopCart