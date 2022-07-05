import LoginForm from "./components/loginForm";
import { Routes, Route } from "react-router-dom";
import UserContext from "./store/userContext";
import Homepage from "./components/Homepage/Homepage";
import { useState, useReducer, useEffect } from "react";
import Vacations from "./components/Vacations/Vacations";

const userReducer = (state, action) => {
  if (action.type === "login") {
    return {
      ...state,
      email: action.payload.email,
      isLoggedIn: true,
      refreshToken: action.payload.refreshToken,
      token: action.payload.token,
      vacations: action.payload.vacations ? [...action.payload.vacations] : [],
    };
  } else if (action.type === "set-vactions") {

    return {
      ...state,
      vacations: [...action.payload.vacations],
    };
  }
  return state;

};
function App() {
  const [state, dispatch] = useReducer(userReducer, {
    token: "",
    email: "",
    vacations: [],
    isLoggedIn: false,
    refreshToken: "",
  });

  useEffect(() => {
    const isAuth = window.localStorage.getItem("authToken");
    if (isAuth) {
      const savedAuthData = JSON.parse(isAuth);
      dispatch({
        type: "login",
        payload: {
          email: savedAuthData.email,
          refreshToken: savedAuthData.refreshToken,
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
        <Route
          path="/"
          element={!state.isLoggedIn ? <LoginForm /> : <Homepage />}
        />

        <Route path="/vacations" element={<Vacations />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
