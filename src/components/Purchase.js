import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../firebase.init';

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
        const url = `http://localhost:5000/tool/${toolId}`
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
        const newQuantity = quantity + parseInt(tool.min_order_quantity);
        const updateQuantity = `${newQuantity}`;
        const toolQuantity = { updateQuantity };
        const url = `http://localhost:5000/tool/${toolId}`;
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
    }

    const handlePurchase = (event) => {
        event.preventDefault();
        const purchaseDetails = {
            toolId: _id,
            toolName: name,
            order_quantity: order_quantity,
            customerName: user.displayName,
            email: user.email,
            phone: phone,
            address: address
        }
        const url = `http://localhost:5000/order`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(purchaseDetails)
        })
            .then(res => res.json())
            .then(data => setOrder(data));

    }


    return (
        <div>
            <h3 className="my-5 text-center">Order information:</h3>
            <div className="g-5 col-sm-12 col-md-6 col-lg-4 mx-auto">
                <div className="card">
                    <div className="card-body">Order Details</div>
                    <img src={tool.img} className="card-img-top mx-auto w-50" alt="images_name" />
                    <div className="card-body">
                        <h5 className="card-title mb-5">{tool.name}</h5>
                        <p className='card-text text-start'>Unit Price: ${tool.per_unit_price}</p>
                        <h6 className="card-text text-start">MOQ: {tool.min_order_quantity}</h6>
                        <h6 className="card-text text-start">Available Stock: {tool.available_quantity - tool.order_quantity}</h6>
                        <p className="card-text text-start">Des:{tool.description}</p>
                        <p className="card-text text-start">Current Order Quantity: {tool.order_quantity}</p>
                        <h6 className="card-title text-danger text-start">Price: ${tool.per_unit_price * tool.order_quantity} </h6>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Customer Details</h5>
                        <p className="card-text card-text">Name: <input type="email" disabled value={user?.displayName} /></p>
                        <p className="card-text card-text">Email: <input type="email" disabled value={user?.email} /></p>
                        <p className="card-text card-text">Phone: <input type="text" name="phone" onChange={(event) => setPhone(event.target.value)} /></p>
                        <p className="card-text card-text">Address: <input type="text" name="address" onChange={(event) => setAddress(event.target.value)} /></p>
                    </div>
                    <div className="my-5 w-25 mx-auto">
                        <form className="d-flex flex-column" onSubmit={updateQuantity}>
                            <input className="mb-2" name="quantity" type="number" placeholder={tool.min_order_quantity} min={tool.min_order_quantity} max={tool.available_quantity} /><br />
                            <input className="text-danger" type="submit" value="Update Order" />
                        </form>
                    </div>
                    <div className='mb-5'>
                        <button onClick={handlePurchase} className='btn btn-warning'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;