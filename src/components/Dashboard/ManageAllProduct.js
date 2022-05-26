import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';

const ManageAllProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tool")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // const options = {
    //     title: 'Warning!!',
    //     message: 'Are You Sure?',
    //     buttons: [
    //         {
    //             label: 'Yes',
    //             onClick: () => alert()
    //         },
    //         {
    //             label: 'No',
    //             onClick: () => 
    //         }
    //     ],
    //     closeOnEscape: true,
    //     closeOnClickOutside: true,
    //     keyCodeForClose: [8, 32],
    //     willUnmount: () => { },
    //     afterClose: () => { },
    //     onClickOutside: () => { },
    //     onKeypress: () => { },
    //     onKeypressEscape: () => { },
    //     overlayClassName: "overlay-custom-class-name"
    // };

    const removeItem = id => {
        const proceed = window.confirm("Are you Sure?");
        if (proceed) {
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                });
            toast("Product Deleted!!");
        }
    };

    return (
        <div>
            <h2 className='text-center text-2xl'>Manage All Product: {products.length}</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>MOQ</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={product._id}>
                            <th>{index + 1}</th>
                            <td>{product.name}</td>
                            <td>${product.per_unit_price}</td>
                            <td>{product.min_order_quantity}</td>
                            <td>{product.available_quantity}</td>
                            <td><button className="btn btn-danger" onClick={() => removeItem(product._id)}>Delete</button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllProduct;