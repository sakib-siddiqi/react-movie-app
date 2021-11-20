import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({children, ...rest}) {
  const { firebase } = useAuth();
  return (
    <>
      {!firebase.loading && (
        <Route
          {...rest}
          render={({ location }) =>
            firebase.user.uid ? (
              children
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { from: location } }}
              />
            )
          }
        />
      )}
    </>
  );
}
export default PrivateRoute;
