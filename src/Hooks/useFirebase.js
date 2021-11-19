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
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  /* ---------------- */
  /* ---------------- */
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  /* ---------------- */
  /* ---------------- */

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        setError("");
        history.push("/home");
      })
      .catch((error) => {
        setUser({});
        setError(error.code);
      });
  };

  // signup
  const handleSignup = (userName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        }).then(() => {});
        // setError("");
        history.push("/success");
      })
      .catch((err) => {
        setError(err.code);
      });
  };
  // signin
  const handleSignin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  /*----------------*/
  //  Sign out
  /*----------------*/
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  /*----------------*/
  //  user state Change
  /*----------------*/
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser({});
      }
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
