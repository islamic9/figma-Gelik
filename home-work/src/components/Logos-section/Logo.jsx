import React from 'react';
import './Logo.css';
import row from './Logo-images/row.png';
import row2 from './Logo-images/row2.png';

const Logo = () => {
  return (
    <div className='container'>
        <div className="logo-wrapper">
            <h2 className="logo-title">Giving Back While Moving Your Auto Body Business Forward.</h2>
            <div className="logo-inner">
                <img src={row} alt="image" />
                <img src={row2} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Logo