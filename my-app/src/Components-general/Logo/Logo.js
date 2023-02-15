import React from 'react'
import "./Logo.css"

function Logo(props) {
  return (
    <div className='logo'>
        <i className="material-icons logo-icon" style={{color: props.colorIcon}}>&#xe865;</i>  
        <div className='logo-text'>Book Spot</div>
    </div>
  )
}

export default Logo