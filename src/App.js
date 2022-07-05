import LoginForm from "./components/loginForm";
import { Routes, Route, Navigate } from "react-router-dom";
import UserContext from "./store/userContext";
import Homepage from "./components/Homepage/Homepage";
import Documents from "./components/Documents/Documents";
import ProtectedRoutes from "./store/ProtectedRouts";
import { useState, useReducer } from "react";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      console.log("loggining");
      return {
        ...state,
        email: action.payload.email,
        isLoggedIn: true,
        refreshToken: action.payload.refreshToken,
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
    email: "",
    vacations: [],
    isLoggedIn: false,
    refreshToken: "",
  });

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
    <Route path="/profile" element={<Homepage/>}/>
    <Route path="/vacations" element={<Homepage/>}/>
    <Route path="/documents" element={<Documents/>}/>
    <Route path="/contacts" element={<Homepage/>}/>
    </Route>
  </Routes>
  </UserContext.Provider>
  );
}

export default App;
