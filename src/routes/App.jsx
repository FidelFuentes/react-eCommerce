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
import DesktopMenu from "../conteiners/DesktopMenu";
import MobileMenu from "../conteiners/MobileMenu";
import MyOrder from "../conteiners/MyOrder";
import MyOrders from "../conteiners/MyOrders";
import ProductDetail from "../conteiners/ProductDetail";
import ShoppingCart from "../conteiners/ShoppingCart";

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
          <Route exact path="/desktopmenu" component={DesktopMenu}></Route>
          <Route exact path="/mobilemenu" component={MobileMenu}></Route>
          <Route exact path="/myorder" component={MyOrder}></Route>
          <Route exact path="/myorders" component={MyOrders}></Route>
          <Route exact path="/productdetail" component={ProductDetail}></Route>
          <Route exact path="/shoppingcart" component={ShoppingCart}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
