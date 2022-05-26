import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { useParams } from 'react-router-dom';
import { auth } from '../firebase.init';
import toast from 'react-hot-toast';

const Purchase = () => {

    const [user, setUser] = useState();
    const { toolId } = useParams();
    const [tool, setTool] = useState([]);
    const [order, setOrder] = useState([]);
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [reload, setIsReload] = useState(true);
    const { _id, name, order_quantity } = tool;

    useEffect(() => {
        const url = `https://morning-badlands-27515.herokuapp.com/tool/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [reload, toolId]);

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

    const updateQuantity = (event) => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value);
        const newQuantity = parseInt(quantity);
        const updateQuantity = `${newQuantity}`;
        const toolQuantity = { updateQuantity };
        const url = `https://morning-badlands-27515.herokuapp.com/tool/${toolId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toolQuantity)
        })
            .then(res => res.json())
            .then(result => {
                setTool(result);
                setIsReload(!reload);
            });
        toast.success('Order Quantity Updated !')
    };

    const handlePurchase = (event) => {
        event.preventDefault();
        const purchaseDetails = {
            toolId: _id,
            toolName: name,
            unit_price: parseInt(tool.per_unit_price),
            order_quantity: parseInt(order_quantity),
            price: tool.per_unit_price * order_quantity,
            customerName: user.displayName,
            email: user.email,
            phone: phone,
            address: address
        }
        const url = `https://morning-badlands-27515.herokuapp.com/order`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(purchaseDetails)
        })
            .then(res => res.json())
            .then(data => setOrder(data));
        toast.success('Order Pleased Successfully !')
    };


    return (
        <div>
            <h3 className="text-2xl my-5">Order information</h3>
            <div className="g-5 col-sm-12 col-md-6 col-lg-4 mx-auto">
                <div className="card">
                    <div className="card-title">Order Details:</div>
                    <img src={tool.img} className="card-img-top mx-auto w-50" alt="images_name" />
                    <div className="card-body">
                        <h5 className="card-title mb-2">{tool.name}</h5>
                        <p className='card-text text-start'>Unit Price: ${tool.per_unit_price}</p>
                        <h6 className="card-text text-start">MOQ: {tool.min_order_quantity}</h6>
                        <h6 className="card-text text-start">Available Stock: {tool.available_quantity - tool.order_quantity}</h6>
                        <p className="card-text text-start">Des: {tool.description}</p>
                        <p className="card-text text-start">Current Order Quantity: {tool.order_quantity}</p>
                        <h6 className="card-title text-danger text-start">Price: ${tool.per_unit_price * tool.order_quantity} </h6>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Customer Details:</h5>
                        <p className="card-text card-text">Name: <input className='select input-bordered w-full max-w-xs' type="email" disabled value={user?.displayName} /></p>
                        <p className="card-text card-text">Email: <input className='select input-bordered w-full max-w-xs' type="email" disabled value={user?.email} /></p>
                        <p className="card-text card-text">Phone: <input className='select input-bordered w-full max-w-xs' type="text" name="phone" onChange={(event) => setPhone(event.target.value)} /></p>
                        <p className="card-text card-text">Address: <input className='select input-bordered w-full max-w-xs' type="text" name="address" onChange={(event) => setAddress(event.target.value)} /></p>
                    </div>
                    <div className="my-2 w-25 mx-auto">
                        <form className="d-flex flex-column" onSubmit={updateQuantity}>
                            <input className="mb-2 select input-bordered w-full max-w-xs" name="quantity" type="number" placeholder={tool.min_order_quantity} min={tool.min_order_quantity} max={tool.available_quantity} /><br />
                            <input className="btn btn-info" type="submit" value="Update" />
                        </form>
                    </div>
                    <div className='my-2'>
                        <button onClick={handlePurchase} className='btn btn-warning'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;