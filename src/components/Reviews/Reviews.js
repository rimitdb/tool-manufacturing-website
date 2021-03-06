import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://morning-badlands-27515.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='container mt-5'>
            <h2 className='text-3xl text-danger'>Customers Review</h2>
            <div className='row'>
                {
                    reviews.slice(0).reverse().map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;