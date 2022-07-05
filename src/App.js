import LoginForm from './components/loginForm';
import { Routes, Route } from 'react-router-dom'
import UserContext from './store/userContext';
import Homepage from './components/Homepage/Homepage'

function App() {

  return (
    <UserContext.Provider value={{
      token: '',
      email: '',
      vacations: [],
      isLoggedIn: false,
      refreshToken: ''
    }}>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<Homepage />} />
      </Routes>

    </ UserContext.Provider>
  );
}

export default App;
