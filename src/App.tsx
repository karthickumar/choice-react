import React from "react";
import { Switch, Link, Route, Redirect } from "react-router-dom";
import { Home, SignIn, Products, Account } from "./pages";
import AuthRoute from "./components/AuthRoute";
import { Header } from "./components/Header/Header";
import { withRouter } from "react-router-dom";

function App(props: any) {
  return (
    <>
      <Header {...props} />
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <AuthRoute path="/account" component={Account} />
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
