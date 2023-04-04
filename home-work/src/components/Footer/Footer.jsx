import React from 'react';
import './Footer.css';
import logo from '../Header-images/logo.svg';
import face from './Footer-images/face.svg';
import insta from './Footer-images/insta.svg';
import twit from './Footer-images/twit.svg';


const Footer = () => {
    return (
        <div className='container'>
            <div className="footer-wrapper">

                <div className="footer-top">
                    <div className="footer-logos">
                        <img src={logo} alt="logo" />
                        <p className="logo-desc">With over 50 years in the auto repair industry, we have a network of successful franchisees.</p>
                    </div>

                    <div className="logo-services">
                        <p className="logos-title">Services</p>
                        <ul>
                            <li className="logo-item">Automate service</li>
                            <li className="logo-item">Computer software</li>
                            <li className="logo-item">Human recognation</li>
                            <li className="logo-item">Operations</li>
                        </ul>
                    </div>

                    <div className="logo-services">
                        <p className="logos-title">About</p>
                        <ul>
                            <li className="logo-item">Our Story</li>
                            <li className="logo-item">Benefits</li>
                            <li className="logo-item">Team</li>
                            <li className="logo-item">Careers</li>
                        </ul>
                    </div>

                    <div className="logo-services">
                        <p className="logos-title">Contact</p>
                        <ul>
                            <li className="logo-item">9, Ziyolilar str., M.Ulugbek district,100170 Tashkent, Uzbekistan</li>
                            <li className="logo-item">+998 71 289-99-99</li>
                            <li className="logo-item">+998 71 269-00-58 (Fax)</li>
                            <li className="logo-item">info@inha.uz</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-left">
                        <p className="privacy">Terms & Conditions</p>
                        <p className="privacy">Privacy Policy</p>
                    </div>
                    <div className="footer-right">
                        <img src={face} alt="image" />
                        <img src={insta} alt="image" />
                        <img src={twit} alt="image" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer