import React from 'react';
import { useState, useEffect } from 'react';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);


    return (
        <div>
            <h2 className='text-center text-2xl'>Manage All Order: {orders.length}</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Order Quantity</th>
                        <th>Customer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.toolName}</td>
                            <td>{order.order_quantity}</td>
                            <td>{order.customerName}</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrder;