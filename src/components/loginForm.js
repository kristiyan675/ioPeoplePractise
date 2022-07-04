import { Form, Button } from 'react-bootstrap'
import { useRef, useState, useContext } from 'react'
import UserContext from '../store/userContext';
const axios = require('axios');


const LoginForm = (props) => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const ctx = useContext(UserContext)

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const loginData = {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
        };

        const login = async () => {
            try {
                const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqoI5B02Xkih4XOtXoaDuEbK_WC6yShJ4', loginData);
                ctx.email = res.data.email;
                props.toggle()
            } catch (err) {
                console.error(err);
            }
        };
        login();

    }

    return (
        <Form onSubmit={loginSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LoginForm;