import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolid, faCheck } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
    return (
        <div className='container mt-5'>
            <h2 className='mb-5 text-danger'>Business Summary</h2>
            <div className='d-flex justify-content-center'>
                <div className='text-start px-5'>
                    <h4 > <FontAwesomeIcon icon={faCheck} /> We Manufactured over 30+ Tools</h4>
                    <h4> <FontAwesomeIcon icon={faCheck} /> 80+ countries all over the World</h4>
                    <h4> <FontAwesomeIcon icon={faCheck} /> 1000+ Satisfied Customer</h4>
                    <h4> <FontAwesomeIcon icon={faCheck} /> ISO 1000:9000 Certification</h4>
                </div>
                <div className='text-start px-5'>
                    <h4 > <FontAwesomeIcon icon={faCheck} /> 20 Years in Business</h4>
                    <h4> <FontAwesomeIcon icon={faCheck} /> Participated 50+ International Trade Fair</h4>
                    <h4> <FontAwesomeIcon icon={faCheck} /> Multiple manufacturing plant</h4>
                    <h4> <FontAwesomeIcon icon={faCheck} /> 200+ skilled employees</h4>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;