import React from "react";
import {
  Route,
  BrowserRouter ,
  Switch
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/AllMovies/Movies";
import SingleMovie from "./Components/Movies/SingleMovie/SingleMovie";
import NotFound from "./Components/Others/NotFound";
import Login from "./Components/Userdetails/Login";
import SignUp from "./Components/Userdetails/SignUp";
import UserProfile from "./Components/Userdetails/UserProfile";
import AuthContext from "./Context/AuthContext";
import useFirebase from "./Hooks/useFirebase";
import PrivateRoute from "./Shared/PrivateRoute";
import { SiteSkeleton } from "./Shared/SkeletonLoading";
import "./Styles/App.css";

/**
 * App
 */
function App() {
  const { firebase } = useFirebase();
  return (
    <BrowserRouter >
      {firebase.loading ? (
        <SiteSkeleton/>
      ) : (
        <AuthContext>
          
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
                <PrivateRoute path="/profile">
                  <UserProfile />
                </PrivateRoute>
                <Route path="*" exact component={NotFound} />
              </Switch>
            </main>
            <Footer />
        </AuthContext>
      )}
    </BrowserRouter>
  );
}
export default App;
