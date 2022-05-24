import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }

    }, [user])


    return (
        <div className='container'>
            <h2 className='text-2xl my-3'>My Orders Summary</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Quantity</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr key={o._id}>
                                <th>{index + 1}</th>
                                <td>{o.toolName}</td>
                                <td>{o.order_quantity}</td>
                                <td><button className="btn btn-info">Cancel</button></td>
                                <td><button className="btn btn-warning">PAY</button></td>
                            </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;