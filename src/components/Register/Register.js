import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../fireBase.init";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error] = useState("");
    const requiredFilledCheck = (email !== "") && (password !== "") && (confirmPassword !== "");
    const [
        createUserWithEmailAndPassword,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (error) {
        return (
            <div>
                <p>Error: {hookError?.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    const handleForm = (e) => {
        e.preventDefault();
    }


    const handleRegister = async () => {
        await createUserWithEmailAndPassword(email, password)
            .then(() => {
                navigate("/")
            })
        toast.success("Verification Email Sent!");

    }

    return (
        <div className='container'>
            <div className='bg-light p-5 mx-auto mt-5 w-100'>
                <h3 className='text-primary mb-5 text-center'>Register</h3>
                <Form onSubmit={handleForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email is Required" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password is Required" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            defaultValue={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password is Required" />
                    </Form.Group>
                    <div className="text-center">
                        <Button
                            disabled={!requiredFilledCheck}
                            onClick={handleRegister}
                            className='w-25' variant="success" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
                <p className='mt-3'>Existing User? Please <span className='text-danger text-decoration-none'><Link to='/login'> Login</Link></span></p>
            </div>
        </div >
    );
};

export default Register;