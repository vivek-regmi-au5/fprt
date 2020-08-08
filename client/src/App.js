import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/brands">
            <Brands />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/admin/login">
            <AdminLogin />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
