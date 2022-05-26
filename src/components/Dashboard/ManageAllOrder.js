import React from 'react';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const removeOrder = id => {
        const proceed = window.confirm("Are you Sure?");
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(product => product._id !== id);
                    setOrders(remaining);
                });
            toast.success("Product Deleted!!");
        }
    };

    return (
        <div>
            <h2 className='text-center text-2xl'>Manage All Order: {orders.length}</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Order Quantity</th>
                        <th>Order Price</th>
                        <th>Customer</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.toolName}</td>
                            <td>{order.order_quantity}</td>
                            <td>${order.price}</td>
                            <td>{order.customerName}</td>
                            <td><button className="btn btn-danger" onClick={() => removeOrder(order._id)}>Delete</button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrder;