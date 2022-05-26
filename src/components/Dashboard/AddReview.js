import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddReview = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
            });

        toast("Review Added Successfully");
    };

    return (
        <div className="w-50">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add Your Review</h2>
                    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="select input-bordered w-full max-w-xs" placeholder="Name" {...register("name", { required: true })} />
                        {errors.name && <p>Name is required.</p>}
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <select {...register("rating", { required: true })} className="select input-bordered w-full max-w-xs">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        {errors.rating && <p>Rating is required.</p>}
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input className="select input-bordered w-full max-w-xs" placeholder="Description" {...register("text", { required: true })} />
                        {errors.text && <p>Text is required.</p>}
                        <div className="card-actions justify-center mt-2">
                            <input className="btn btn-warning" type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddReview;