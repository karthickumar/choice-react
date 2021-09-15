import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

function AuthRoute(props: any) {
  const { component: Component, ...rest } = props;

  const [cookies, setCookie, removeCookie] = useCookies(["isLoggedin"]);

  console.log("[cookies] - ", cookies);

  const isLoggedIn = cookies.isLoggedin === "true";

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
