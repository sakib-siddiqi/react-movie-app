import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
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
import useFirebase from "./Hooks/useFirebase";
import "./Styles/App.css";
function App() {
  const { firebase } = useFirebase();
  return (
    <>
      <Router>
        <Header />
        <main className="bg-this-semi-dark  center">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/movies" exact>
              {firebase.user.email ? <Movies /> : <Redirect to="/login" />}
            </Route>
            <Route path="/movies/:id">
              {firebase.user.email ? <SingleMovie /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {firebase.user.email ? <Redirect to="/profile" /> : <Login />}
            </Route>
            <Route path="/signup">
              {!firebase.user.email ? <SignUp /> : <Redirect to="/profile" />}
            </Route>
            <Route path="/success">
              {firebase.user.email ? <Success /> : <Redirect to="/login" />}
            </Route>
            <Route path="/profile">
              {firebase.user.email ? <UserProfile /> : <Redirect to="/login" />}
            </Route>
            <Route path="*" exact component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;
