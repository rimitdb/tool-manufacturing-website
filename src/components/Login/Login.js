import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../fireBase.init'
import toast from 'react-hot-toast';
import { Button, Form } from 'react-bootstrap';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const requiredFilledCheck = (email !== "") && (password !== "");
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }

    const handleLogin = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        setValidated(true);
        signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })


    }

    const SendPasswordReset = async () => {
        await sendPasswordResetEmail(email);
        toast.success('Reset Password Email Sent!');
    }


    if (error) {
        return (
            <p>Error: {error.message}</p>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }


    return (

        <div className='container'>
            <div className='bg-light p-2 mx-auto mt-5 w-100'>
                <h3 className='text-primary mb-5 text-center'>Login</h3>
                <Form noValidate validated={validated} onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            onBlur={(e) => setEmail(e.target.value)}
                            placeholder="Email is required"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please input a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            onBlur={(e) => setPassword(e.target.value)}
                            placeholder="Password is required"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please input a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className='text-center'>
                        <Button disabled={!requiredFilledCheck} onClick={handleLogin} className='w-25' variant="success" type="submit">Login</Button>
                    </div>
                </Form>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                    <p className='mx-2'>New User? Please<span className='text-primary'><Link to='/register'>Register</Link></span></p>
                    <p className='mx-2'>Forget Password?<span className='text-primary'><Button onClick={SendPasswordReset} variant="link">Reset Password</Button></span></p>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='border border-1 border-dark w-50 mb-2'></div>
                    <p className='mt-1 px-1'>OR</p>
                    <div className='border border-1 border-dark w-50 mb-2'></div>
                </div>
                <div className='text-center'>
                    <Button onClick={handleGoogleLogin} className='w-25  mb-2' variant='success' type="submit">Login with Google</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;