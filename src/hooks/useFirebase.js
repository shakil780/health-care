import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import firebaseInit from "../firebase/firebaseInit";

firebaseInit();
function useFirebase() {
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser({});
        setLoading(false);
      }
    });
  }, []);
  return { user, createUser, login, logOut, googleSignIn, setUser, loading };
}

export default useFirebase;
