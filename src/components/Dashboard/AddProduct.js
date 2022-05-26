import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const url = `https://morning-badlands-27515.herokuapp.com/tool`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset();
            });

        toast.success("Product Added Successfully");
    };


    return (
        <div className="w-50">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add Product</h2>
                    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-2" placeholder="Name" {...register("name")} />
                        <input className="mb-2" placeholder="Image URL" {...register("img")} />
                        <input className="mb-2" placeholder="Description" {...register("description")} />
                        <input className="mb-2" placeholder="MOQ" type="number" {...register("min_order_quantity")} />
                        <input className="mb-2" placeholder="Stock" type="number" {...register("available_quantity")} />
                        <input className="mb-2" placeholder="Unit Price:" type="number" {...register("per_unit_price")} />
                        <div className="card-actions justify-center">
                            <input className="btn btn-warning" type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;