import React, {useContext, createContext}  from 'react';
import { Route, Navigate  } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {

    const authContext = createContext();
    function useAuth() {
        return useContext(authContext);
    }

  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate 
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;