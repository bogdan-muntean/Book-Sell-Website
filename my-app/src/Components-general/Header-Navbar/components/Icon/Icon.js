import React from 'react';
import './Icon.css';

function Icon() {
  return (
    <div className='icon-container'>
        <div className='logo-container'>
            <i className="material-icons logo-icon">&#xe865;</i>  
            <div className='logo-text'>Pages</div>
        </div>
        <div className='icon-icons'></div>
    </div>
  )
}

export default Icon