import React, { Component } from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import '../styles/global.css';
import Layout from "../conteiners/Layout";
import Login from "../conteiners/login";
import RecoveryPassword from "../conteiners/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = ()=>{
    return (
        <BrowserRouter>
        <Layout>
        <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/recovery-password" component={RecoveryPassword}></Route>
                <Route path="*" component={NotFound}></Route>
        </Switch>
        </Layout>
        </BrowserRouter>
        
    );
}

export default App;


