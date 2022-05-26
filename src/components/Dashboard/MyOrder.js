import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://morning-badlands-27515.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            }).then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
                .then(data => setOrders(data));
        }

    }, [user, navigate]);

    const deleteOrder = id => {
        const confirmed = window.confirm("Are You Sure?");
        if (confirmed) {
            const url = `https://morning-badlands-27515.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                });
            toast.success("Order Deleted!!");
        }
    }


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
                            <th>Order Price</th>
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
                                <td>${o.price}</td>
                                <td><button onClick={() => deleteOrder(o._id)} className="btn btn-info">Cancel</button></td>
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