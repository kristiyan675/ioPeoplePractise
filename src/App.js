import LoginForm from "./components/loginForm";
import { Routes, Route, Navigate } from "react-router-dom";
import UserContext from "./store/userContext";
import Homepage from "./components/Homepage/Homepage";
import Documents from "./components/Documents/Documents";
import ProtectedRoutes from "./store/ProtectedRouts";
import Profile from "./components/Profile/Profile";
import { useEffect, useReducer } from "react";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        firstName: action.payload.firstName,
        isLoggedIn: true,
        id: action.payload.id,
        token: action.payload.token,
        vacations: action.payload.vacations,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(authReducer, {
    token: "",
    firstName: "",
    vacations: [],
    isLoggedIn: false,
    id: "",
  });

  useEffect(() => {
    const isAuth = localStorage.getItem("authToken");
    if (isAuth) {
      const savedAuthData = JSON.parse(isAuth);
      dispatch({
        type: "login",
        payload: {
          firstName: savedAuthData.firstName,
          id: savedAuthData.id,
          token: savedAuthData.token,
          vacations: savedAuthData.vacations,
        },
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
     
    
    <Routes>
    <Route path="/" element={!state.isLoggedIn ? <LoginForm /> : <Homepage/>} />
    <Route element={<ProtectedRoutes/>}>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/vacations" element={<Homepage/>}/>
    <Route path="/documents" element={<Documents/>}/>
    <Route path="/contacts" element={<Homepage/>}/>
    </Route>
  </Routes>
  </UserContext.Provider>
  );
}

export default App;
