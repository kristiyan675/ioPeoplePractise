import LoginForm from "./components/loginForm";
import { Routes, Route, Navigate } from "react-router-dom";
import UserContext from "./store/userContext";
import Homepage from "./components/Homepage/Homepage";
import { useReducer, useEffect } from "react";
import Vacations from "./components/Vacations/Vacations";
import Documents from "./components/Documents/Documents";
import ProtectedRoutes from "./store/ProtectedRouts";
import Layout from "./components/Layout";
import Profile from "./components/Profile/Profile";


const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        email: action.payload.email,
        isLoggedIn: true,
        refreshToken: action.payload.refreshToken,
        token: action.payload.token,
        vacations: action.payload.vacations
          ? [...action.payload.vacations]
          : [],
      };
    case "set-vactions":
      return {
        ...state,
        vacations: [...action.payload.vacations],
      };
    case "logout":
      return {
        ...state,
        email: "",
        isLoggedIn: false,
        refreshToken: "",
        token: "",
        vacations: [],
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
    const isAuth = localStorage.getItem("authToken");
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
      <Layout>
      <Routes>
        <Route
          path="/"
          element={!state.isLoggedIn ? <LoginForm /> : <Homepage />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/vacations" element={<Vacations />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contacts" element={<Homepage />} />
        </Route>
      </Routes>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
