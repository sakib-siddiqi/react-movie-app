import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/AllMovies/Movies";
import SingleMovie from "./Components/Movies/SingleMovie/SingleMovie";
import NotFound from "./Components/Others/NotFound";
import Success from "./Components/Success/Success";
import Login from "./Components/Userdetails/Login";
import SignUp from "./Components/Userdetails/SignUp";
import UserProfile from "./Components/Userdetails/UserProfile";
import AuthContext from "./Context/AuthContext";
import useFirebase from "./Hooks/useFirebase";
import PrivateRoute from "./Shared/PrivateRoute";
import "./Styles/App.css";

/**
 * App
 */
function App() {
  const { firebase } = useFirebase();
  return (
    <>
      {firebase.loading ? (
        <h1>Loading Data</h1>
      ) : (
        <AuthContext>
          <Router>
            <Header />
            <main className="bg-this-semi-dark  center">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <PrivateRoute path="/movies" exact>
                  <Movies />
                </PrivateRoute>
                <PrivateRoute path="/movies/:id">
                  <SingleMovie />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/success">
                  <Success />
                </Route>
                <PrivateRoute path="/profile">
                  <UserProfile />
                </PrivateRoute>
                <Route path="*" exact component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </Router>
        </AuthContext>
      )}
    </>
  );
}
export default App;
