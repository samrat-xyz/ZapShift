import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {

  // creating new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login existing user
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  // login by google account

  const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider);
  }


  const userInfo = {
    createUser,
    signInUser,
    googleLogin
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
