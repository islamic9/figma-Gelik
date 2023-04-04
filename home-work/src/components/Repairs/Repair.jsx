import React from 'react';
import '../Repairs/Repair.css';
import belts from './Repairs-images/belts.png';
import check from './Repairs-images/check.png';
import heating from './Repairs-images/heating.png';
import light from './Repairs-images/light.png';
import oil from './Repairs-images/oil.png';
import repair from './Repairs-images/repair.png';
import steering from './Repairs-images/steering.png';
import system from './Repairs-images/system.png';
import '../../container.css'

const Repair = () => {
    const products = [
        {
            id: 0,
            image: repair,
            name: "Brakes & Brake Repair",
            description: "From the brake pedal to hydraulic brake fluid, brake master cylinder to power brake booster, drum brakes to disc brakes and electronic anti-lock brake sensors, Midas technicians know every part of your brake system inside and out and can perform brake",
        },
        {
            id: 1,
            image: oil,
            name: "Oil Change",
            description: "Oil is the lifeblood of your engine. It reduces friction, lessens wear, provides lubrication, forms a seal between the pistons, rings and cylinder walls while helping to cool engine parts. Without the cleaning action of new oil, carbon and varnish buildup would be toxic.",
        },
        {
            id: 2,
            image: system,
            name: "Exhaust System Services",
            description: "You may think your car’s exhaust system is designed only to reduce noise, but it is also responsible for reducing harmful emissions from entering the atmosphere. Properly functioning mufflers and exhaust systems not only sound better, they are better – for you.",
        },
        {
            id: 3,
            image: check,
            name: "Check Engine Light",
            description: "An illuminated check engine light means you should have your vehicle checked as soon as possible. Midas has the expertise to decipher check engine light codes, resolve the required maintenance or repair issues, and get your car on the road safely.",
        },
        {
            id: 4,
            image: light,
            name: "Lights, Wipers & Accessories",
            description: "Our Midas technicians can help improve your visibility by inspecting windshield wiper blades, headlamps, turn signals, and brake lights, and by filling your windshield washer fluid.",
        },
        {
            id: 5,
            image: steering,
            name: "Steering & Suspension",
            description: "Our Midas technicians can help improve your visibility by inspecting windshield wiper blades, headlamps, turn signals, and brake lights, and by filling your windshield washer fluid.",
        },
        {
            id: 6,
            image: belts,
            name: "Belts & Hoses",
            description: "Our Midas technicians can help improve your visibility by inspecting windshield wiper blades, headlamps, turn signals, and brake lights,"
        },
        {
            id: 7,
            image: heating,
            name: "Car A/C & Heating Repair",
            description: "Car AC systems have components that require love and attention to avoid drying out and cracking. The car heater also needs regular check-ups to make sure there are no leaky valves or blockages. Let your neighborhood Midas service your A/C."
        }
    ]
    return (
        <div className='container'>
            <div className="blog-wrapper">
                <div className="product-card">
                    {
                        products.map(product =>
                            <div className='product-inner'>
                                <img className='product-img' src={product.image} alt="" />
                                <h2 className='product-title'>{product.name}</h2>
                                <p className='product-text'>{product.description}</p>
                                <a className='product-link' href="">Read more</a>
                            </div>
                        )
                    }
                </div>
                <button className="repair-btn">Browse All</button>
            </div>
        </div>
    )
}

export default Repair