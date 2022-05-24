import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='container'>

            <div className='card my-5 text-center'>
                <div className="card-body">
                    <h5 className="card-title">Name: Iqbal Hossain</h5>
                    <p className="card-title">E-Mail: iqbal.du.mis@gmail.com</p>
                    <p className="card-text">Educational Qualification: BBA, MBA (Dhaka University)</p>
                    <p className="card-text">Skilled: RedHat Certified System administrator</p>
                    <p className="card-text">Skilled: Full Stack Jr. Web Developer</p>
                    <p className="card-text">Live Project Link</p>
                    <ul>
                        <li>https://inventory-management-aac2b.web.app/</li>
                        <li>https://torist-guide.web.app/</li>
                        <li>https://iqbal-project-9.netlify.app/</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;