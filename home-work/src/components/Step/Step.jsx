import React from 'react';
import './Step.css';
import step from './step-img.png';

const Step = () => {
    return (
        <div className='container'>
            <div className="step-inner">
                <img src={step} alt="picture" />
                <div className="step-wrapper">
                    <h2 className="step-title">We are with you every step of way.</h2>
                    <p className="step-text">Now it’s time for both of us to make sure it’s a good fit. We’ve developed a mutual evaluation process that lets us both learn more about each other and make an informed decision about your future.</p>
                    <strong className='step-info'>Automotive systems</strong>
                    <strong className='step-info'>Customer service</strong>
                    <strong className='step-info'>Computer software</strong>
                    <strong className='step-info'>Sales</strong>
                    <strong className='step-info'>Operations</strong>
                    <p className="step-human">Human resources</p>
                    <button className="step-btn">Browse All</button>
                </div>
            </div>
        </div>
    )
}

export default Step