import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/global.css";
import Layout from "../conteiners/Layout";
import Login from "../conteiners/login";
import RecoveryPassword from "../conteiners/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SignUp from "../conteiners/SignUp";
import CreateAccount from "../conteiners/CreateAccount";
import EditAccount from "../conteiners/EditAccount";
import HomeBody from "../conteiners/HomeBody";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route
            exact
            path="/recovery-password"
            component={RecoveryPassword}
          ></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/createaccount" component={CreateAccount}></Route>
          <Route exact path="/editaccount" component={EditAccount}></Route>
          <Route exact path="/homebody" component={HomeBody}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
