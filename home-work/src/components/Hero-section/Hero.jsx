import React from 'react';
import './Hero.css';
import contact from '../Header-images/contact.svg';
import location from '../Header-images/Location.svg';
import clock from '../Header-images/clock.svg';

const Hero = () => {
    return (
        <div className='container'>
            <div className="hero-wrapper">
                <div className="hero-info_wrapper">
                    <h1 className="title">The best way to avoid problems with vehicle is planning ahead</h1>
                    <p className="hero-text">The combined effort of the battery, starter, and alternator is what keeps your vehicle powered.</p>
                    <button className='hero-btn'>Contact Us</button>
                </div>
            </div>

            <div className="hero-service">

                <div className="hero-service__info">
                    <img src={contact} alt="icon" />
                    <div className="hero-service__info-wrapper">
                        <p className="hero-service__title">Contact</p>
                        <p className='hero-service__text'>+99891 999-99-99</p>
                        <p className='hero-service__text'>companyname@info.com</p>
                    </div>
                </div>
                <div className="hero-service__info">
                    <img src={clock} alt="icon" />
                    <div className="hero-service__info-wrapper">
                        <p className="hero-service__title">Location</p>     
                        <p className='hero-service__text'>440 S. Church Street, Suite 700, Charlotte, NC 28202</p>
                    </div>
                </div>

                <div className="hero-service__info">
                    <img src={location} alt="icon" />
                    <div className="hero-service__info-wrapper">
                        <p className="hero-service__title">Open hours</p>
                        <p className='hero-service__text'>Mon Fri: 8:00am to 5:00pm 
                        Sut Sun: Close</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero