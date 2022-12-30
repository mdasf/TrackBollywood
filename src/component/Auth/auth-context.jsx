import { createContext, useEffect, useState } from "react";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const defaultCtx = {
  email: "",
  password: "",

  logout: () => {},
  login: () => {},
};

export const AuthContext = createContext(defaultCtx);

const AuthContextProvider = (props) => {
  // const [emailtemp, setEmailtemp] = useState("asif");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        setUser(credential.user);
        setLoading(false);

        // console.log(credential);
        navigate("/auth/dashboard");
      })
      .catch((error) => {
        // console.log(error);
        setError(error);
        setLoading(false);
        // throw error;
        // navigate("/auth");
      });
  };

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/auth");
    });
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log("onAuthStateChanged");
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        error,
        setError,
        // emailtemp,
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
