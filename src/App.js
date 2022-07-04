import LoginForm from './components/loginForm';
import { Routes, Route } from 'react-router-dom'
import UserContext from './store/userContext';
import { useState } from 'react'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function toggleState() {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <UserContext.Provider value={{
      email: '',
      vacations: [],
    }}>

        {!isLoggedIn && <LoginForm toggle={toggleState} />}
        {isLoggedIn && <p>User Logged in</p>}

    </ UserContext.Provider>
  );
}

export default App;
