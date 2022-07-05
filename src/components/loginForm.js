import { Form, Button } from "react-bootstrap";
import { useRef, useState, useContext } from "react";
import UserContext from "../store/userContext";
import './loginForm.scss'

const axios = require("axios");

const LoginForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const ctx = useContext(UserContext);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    const login = async () => {
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqoI5B02Xkih4XOtXoaDuEbK_WC6yShJ4",
          loginData
        );
        ctx.email = res.data.email;
        props.toggle();
      } catch (err) {
        console.error(err);
      }
    };
    login();
  };

  return (
    <div className="d-flex container vh-100 justify-content-center align-items-center">
      <div className="row vh-100 justify-content-center align-items-center text-styles">
          <Form onSubmit={loginSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="display-6">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInputRef}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="display-6">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="outline-secondary" type="submit">
              LogIn
            </Button>
          </Form>
        </div>
      </div>
    
  );
};

export default LoginForm;
