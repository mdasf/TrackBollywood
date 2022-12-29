import { createContext, useEffect, useState } from "react";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const defaultCtx = {
  email: "",
  password: "",

  logout: () => {},
  login: () => {},
};

export const AuthContext = createContext(defaultCtx);

const AuthContextProvider = (props) => {
  const [emailtemp, setEmailtemp] = useState("asif");
  // const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((credential) => {
      // setCurrentUser(user);
      console.log(credential);
      navigate("/auth/dashboard");
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/auth");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        emailtemp,
      }}
    >
      {props.children}
      {/* {!currentUser && props.children} */}
      {/* {currentUser && <Login />} */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// if (!auth.currentUser) {
//   console.log("not authorized");
//   return <Navigate to="/login" replace />;
// } else return children;
