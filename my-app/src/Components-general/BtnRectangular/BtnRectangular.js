import React from 'react'
import "./BtnRectangular.css"

function BtnRectangular(props) {
  return (
    <div className='btn-rectangular-container'>
      <div className='btn-rectangular-text'>
        {props.text}
      </div>
    </div>
  )
}

export default BtnRectangular