import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const MyProfile = () => {
    const [user, setUser] = useState();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
        });
    }, []);

    const onSubmit = (data, id) => {
        const userDetails = {
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedin: data.linkedin
        }
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },

            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(userDetails)
                reset();
            });
        toast.success('Profile Updated Successfully')
    };

    return (
        <div>
            <div className="w-50">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Name: {user?.displayName}</h2>
                        <h2 className="card-title">E-Mail: {user?.email}</h2>
                        <h3 className="card-subtitle my-3">Please Update Following Information:</h3>
                        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input className="select input-bordered w-full max-w-xs" {...register("education", { required: true })} />
                            {errors.name && <p>Education is required.</p>}
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input className="select input-bordered w-full max-w-xs" {...register("location", { required: true })} />
                            {errors.rating && <p>Location is required.</p>}
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input className="select input-bordered w-full max-w-xs"  {...register("phone", { required: true })} />
                            {errors.text && <p>Phone Number is required.</p>}
                            <label className="label">
                                <span className="label-text">LinkedIn profile</span>
                            </label>
                            <input className="select input-bordered w-full max-w-xs"  {...register("linkedin", { required: true })} />
                            {errors.text && <p>LinkedIn Profile is required.</p>}
                            <div className="card-actions justify-center mt-2">
                                <input className="btn btn-warning" type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default MyProfile;