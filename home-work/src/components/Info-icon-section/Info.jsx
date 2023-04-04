import React from 'react';
import './Info.css';
import palma from './Info-images/palma.png';
import service from './Info-images/service.png';
import truck from './Info-images/truck.png';
import turn from './Info-images/turn.png'

const Info = () => {
  return (
    <div className='container'>
        <div className="info-wrapper">

            <div className="info-card">
                <img src={service} alt="icon" className="info-img" />
                <h3 className="info-title">INDUSTRY-LEADING TOOLS</h3>
                <p className="info-text">Improve your collision center’s efficiency with our proprietary business management system and best-in-class solutions, helping you convert more customers, hit your KPIs.</p>
            </div>

            <div className="info-card">
                <img src={palma} alt="icon" className="info-img" />
                <h3 className="info-title">UNBEATABLE BUYING POWER</h3>
                <p className="info-text">Find great deals through Driven Brands’ expansive network, and receive discounts and rebates from our 50+ preferred vendors.</p>
            </div>

            <div className="info-card">
                <img src={turn} alt="icon" className="info-img" />
                <h3 className="info-title">THOROUGH TRAINING AND EDUCATION</h3>
                <p className="info-text">Attain the knowledge you and your team need to run a high-performing business with our robust training and education programs.</p>
            </div>

            <div className="info-card">
                <img src={truck} alt="icon" className="info-img" />
                <h3 className="info-title">Consistent Revenue Growth</h3>
                <p className="info-text">With a Central Review team that will help you write more accurate estimates and meet your top-line KPIs, you can be confident your business is more efficient than ever.</p>
            </div>

        </div>
    </div>
  )
}

export default Info