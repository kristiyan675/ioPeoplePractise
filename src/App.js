import LoginForm from './components/loginForm';
import { Routes, Route } from 'react-router-dom'
import UserContext from './store/userContext';
import Homepage from './components/Homepage/Homepage'
import { useState } from 'react'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function toggleState() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <UserContext.Provider value={{
      token: '',
      email: '',
      vacations: [],
      isLoggedIn: false,
      refreshToken: ''
    }}>
      {!isLoggedIn && <LoginForm toggle={toggleState} />}
      {isLoggedIn && <Homepage />}

    </ UserContext.Provider>
  );
}

export default App;
