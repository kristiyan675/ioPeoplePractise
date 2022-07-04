import LoginForm from './components/loginForm';
import { Router, Route } from 'react-router-dom'
import UserContext from './store/userContext';

function App() {

  return (
    <UserContext.Provider value={{
      email: '',
      vacations: [],
      isLoggedIn: false
    }}>
      {!UserContext.isLoggedIn && <LoginForm />}
      {UserContext.isLoggedIn && <p>User Logged in</p>}
    </ UserContext.Provider>
  );
}

export default App;
