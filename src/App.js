import LoginForm from "./components/loginForm";
import { Routes, Route } from "react-router-dom";
import UserContext from "./store/userContext";
import Homepage from "./components/Homepage/Homepage";
import { useReducer, useEffect } from "react";

const authReducer = (state, action) => {
  console.log(action.payload, "payload");
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
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
