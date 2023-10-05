import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // crete User with email and password
  const createUser = (email, passwrod) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, passwrod);
  };

  //   sign In User
  const signInUser = (email, passwrod) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, passwrod);
  };

  //   sign out
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  //set user by using onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user is : ", currentUser);
      setUser(currentUser);
    setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {""}
      {children}
      {""}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
