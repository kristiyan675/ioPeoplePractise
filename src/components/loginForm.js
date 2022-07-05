import { Form, Button } from 'react-bootstrap'
import { useRef, useContext } from 'react'
import UserContext from '../store/userContext';
const axios = require('axios');

const LoginForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

    const userCtx = useContext(UserContext);

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
                const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqoI5B02Xkih4XOtXoaDuEbK_WC6yShJ4', loginData);
                if (res.status === 200) {
                    userCtx.token = res.data.idToken
                    userCtx.email = res.data.email
                    userCtx.isLogged = true
                    userCtx.refreshToken = res.data.refreshToken
                    props.toggle()
                }
            } catch (err) {
                console.error(err);
            }
        }
        login();
    }

    return (
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
       
    
  );
};

export default LoginForm;
