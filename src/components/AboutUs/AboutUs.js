import React from 'react';
import warehouse from '../../assets/img/warehouse.jpg'
const AboutUs = () => {
    return (
        <div className='container mt-5'>
            <h3 className='text-3xl text-danger mb-5'>About Us</h3>
            <div className='d-flex flex-sm-column flex-md-column flex-lg-row'>
                <div className='text-start'>
                    <h4 className='text-1xl text-success mb-3'>The Company</h4>
                    <p>RIM Electric Tools is established in 2008, with 20 years experience in tools business. FIXTECH is our registered brand. One-stop tools station, including full line of power tools, hand tools, bench tools, air tools, welding machine, water pumps, generators, garden tools and power accessories etc.</p>
                </div>
                <div className='text-start'>
                    <h4 className='text-1xl text-success mb-3'>Warehouse</h4>
                    <p>We have over 5000 Square Meter warehouse. Full range of quality tools. We have Ready Stock for Rapid Delivery. We provide 7 dyas lead time.</p>
                </div>
            </div>
            <div className='my-5'>
                <img className='img-fluid' src={warehouse} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;