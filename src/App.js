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
import Contacts from "./components/Contacts/Contacts";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        address: action.payload.address,
        isLoggedIn: true,
        id: action.payload.id,
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
        firstName: "",
        lastName: "",
        address: "",
        isLoggedIn: false,
        id: "",
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
    firstName: "",
    lastName: "",
    address: "",
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
          lastName: savedAuthData.lastName,
          address: savedAuthData.address,
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
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
