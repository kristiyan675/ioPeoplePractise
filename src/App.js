import LoginForm from "./components/loginForm";
import { Routes, Route } from "react-router-dom";
import UserContext from "./store/userContext";
import Homepage from "./components/Homepage/Homepage";
import { useReducer, useEffect } from "react";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
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
        <Route path='/' element={!state.isLoggedIn ? <LoginForm /> : <Homepage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
