import React from 'react';

const Review = ({ review }) => {
    const { name, label, rating, text_ } = review;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='card'>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{label}</h6>
                    <p className="card-text">Rating: {rating}</p>
                    <p className="card-text">{text_}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;