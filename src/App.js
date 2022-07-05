import LoginForm from './components/loginForm';
import { Routes, Route, Navigate } from 'react-router-dom'
import UserContext from './store/userContext';
import { useState } from 'react'
import  Homepage  from './components/Homepage/Homepage'
import Navigation from './components/Homepage/Navigation/Navigation';
import Documents from './components/Documents/Documents'



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


    
    {/* {!isLoggedIn && <LoginForm toggle={toggleState} />} */}
    {/* {isLoggedIn && <Homepage/> } */}

    <Routes>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/profile" element={<Homepage/>}/>
      <Route path="/vacations" element={<Homepage/>}/>
      <Route path="/documents" element={<Documents/>}/>
      <Route path="/contacts" element={<Documents/>}/>
    </Routes>
    </ UserContext.Provider>
  );
}

export default App;
