import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='text-3xl text-danger mb-5'>Contact Us</h3>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Please write us if ou have any query!</h2>
                    <textarea className="textarea textarea-warning" placeholder="Write Your Message Here...."></textarea>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline">Send Message</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ContactUs;