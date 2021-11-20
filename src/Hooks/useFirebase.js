import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {
  /* ---------------- */
  /* providers */
  /* ---------------- */
  const googleProvider = new GoogleAuthProvider();

  /* ---------------- */
  /* ---------------- */
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  /* ---------------- */
  /* ---------------- */

  // Google Signin
  const handleGoogleSignin = (redirect) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        setError("");
        redirect();
      })
      .catch((error) => {
        setUser({});
        setError(error.code);
      })
      .finally(() => setLoading(false));
  };

  // signup
  const handleSignup = ({ userName, email, password }, redirect, callBack) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        }).then((res) => {
          setUser(res?.user);
          redirect();
          callBack();
        });
      })
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  // signin
  const handleSignin = ({ email, password }, redirect) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setError("");
        redirect();
      })
      .catch((error) => setError(error.code))
      .finally(() => setLoading(false));
  };
  /*----------------*/
  //  Sign out
  /*----------------*/
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => setError(err.code));
  };
  /*----------------*/
  //  user state Change
  /*----------------*/
  useEffect(() => {
    setLoading(true);
    return onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({});
      setLoading(false);
    });
  }, []);
  // handle error
  const handleError = (error) => {
    setError(error);
  };
  /*---------------*/
  /*Returns*/
  /*---------------*/
  return {
    firebase: {
      user,
      error,
      loading,
    },
    handleGoogleSignin,
    handleSignOut,
    handleSignup,
    handleSignin,
    handleError,
  };
  /*---------------*/
  /*---------------*/
};
export default useFirebase;
