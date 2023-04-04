import React from 'react';
import '../../container.css';
import './Header.css';
import logo from '../Header-images/logo.svg';
import lupa from '../Header-images/lupa.svg';
import bottomIcon from '../Header-images/bottom-icon.svg'
import personIcon from '../Header-images/person.svg'


export const navbar = () => {
  return (
    <div className="header">
      <div className='container'> 

        <div className="orderAndPhone">
          <p className="myOrder">My order | Order now</p>
          <p className="phone">+99891 999-99-99</p>
        </div>

        <nav className='nav'>

          <img src={logo} alt="site logo" />

          <ul className="itemWrapper">
            <li className="item">Home</li>
            <li className="item">About Us</li>
            <li className="item">Services</li>
            <li className="item">News</li>
            <li className="item">Contact Us</li>
          </ul>

          <div className="itemService">
            <img src={lupa} alt="lupa" />
            <p className="language">UZ<img src={bottomIcon} alt="icon" /></p>
            <img src={personIcon} alt="person icon" />
            <div className="nav-button__wrapper">
              <button className="nav-button">Service</button>
              <p className="market">Market</p>
            </div>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default navbar
