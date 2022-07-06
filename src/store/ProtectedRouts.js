import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from './userContext';

const useAuth = () => {
    const { state } = useContext(UserContext);
    return state.isLoggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/"/>
}

export default ProtectedRoutes;