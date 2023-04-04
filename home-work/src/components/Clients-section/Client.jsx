import React from 'react';
import './Client.css';
import ali from './client-images/ali.png';
import left from './client-images/left-img.png';
import right from './client-images/right.png';

const Client = () => {
  return (
    <div className='container'>
        <div className="client-wrapper">
            <h2 className="client-title">Meet with our clients feedback</h2>
            <div className="client-inner">
                <img src={left} alt="image"/>
                <div className="about-ali">
                    <div className="ali-item">
                        <p className="ali-text">As a young 27-year-old entrepreneur who wanted to take a dream and turn it into a reality, Tuffy took me seriously!  Starting from day one with onsite support from District Manager Scott Adams to continued training support empowering my staff to grow. With this support and hard work, I was able to grow into 3 stores in less than 3 years with a plan for more on the horizon. If someone told me five years ago this is where I would be, I would have thought that’s impossible. Thanks for believing in me Tuffy!!</p>
                        <strong className='ali-name'>Ali Safarov</strong>
                        <p className="ali-company">Co-founder of ABC company</p>
                    </div>
                    <img className='ali-img' src={ali} alt="image" />
                </div>
                <img src={right} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Client