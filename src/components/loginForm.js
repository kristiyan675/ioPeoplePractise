import { Form, Button } from "react-bootstrap";
import { useRef, useContext } from "react";
import UserContext from "../store/userContext";
const axios = require("axios");

const LoginForm = (props) => {
  const firstNameInputRef = useRef();
  const passwordInputRef = useRef();

  const userCtx = useContext(UserContext);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = firstNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      firstName: enteredEmail,
      password: enteredPassword
    };

    const login = async () => {
      try {
        const res = await axios.post(
          "https://vacationwebapi.azurewebsites.net/Auth",
          loginData
        );
        if (res.status === 200) {
          console.log(res.data)
          const data = JSON.stringify({
            token: res.data.token,
            firstName: res.data.firstName,
            isLoggedIn: true,
            id: res.data.id
          })
          localStorage.setItem('authToken', `${data}`)
          userCtx.dispatch({
            type: "login",
            payload: {
              token: res.data.token,
              firstName: res.data.firstName,
              isLoggedIn: true,
              id: res.data.id,
            },
          });

        }
      } catch (err) {
        console.error(err);
      }
    };
    login();
  };

  return (
    <Form onSubmit={loginSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={firstNameInputRef}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
