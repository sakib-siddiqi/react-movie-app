import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import NotFound from "./Components/Others/NotFound";
import Login from "./Components/Userdetails/Login";
import SignUp from "./Components/Userdetails/SignUp";
import "./Styles/App.css";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="bg-this-semi-dark  center">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;
