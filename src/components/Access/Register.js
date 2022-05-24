import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
// import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init"

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error] = useState("");
    const requiredFilledCheck = (email !== "") && (password !== "");
    const [
        createUserWithEmailAndPassword,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let loginError;

    if (loading || updating) {
        return <p>Loading...</p>;
    }

    if (error || hookError || updateError) {
        loginError = <p className="text-danger"><small>{error?.message || hookError?.message || updateError?.message}</small></p>
    }


    const handleForm = (e) => {
        e.preventDefault();
    }


    const handleRegister = async () => {

        await createUserWithEmailAndPassword(email, password)

        // toast.success("Verification Email Sent!");
        await updateProfile({ displayName: name })
            .then(() => {
                navigate("/")
            });

    }

    return (
        <div className='card'>
            <div className='bg-light p-5 mx-auto mt-5'>
                <h3 className='text-primary mb-5 text-center'>Register</h3>
                <Form onSubmit={handleForm}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name is Required" />
                    </Form.Group>
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
                    <div className="text-center">
                        <Button
                            disabled={!requiredFilledCheck}
                            onClick={handleRegister}
                            variant="warning" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
                {loginError}

                <p className='mt-3'>Existing User? Please <span className='text-danger text-decoration-none'><Link to='/login'> Login</Link></span></p>
            </div>
        </div >
    );
};

export default Register;