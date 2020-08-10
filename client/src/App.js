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
import Dashboard from "./components/Dashboard";
import AddProductForm from "./components/AddProductForm";
import { connect } from "react-redux";
import Categories from "./components/Categories";
import Users from "./components/Users";

function App({ isAuthenticated }) {
  return (
    <div className="App">
      <Nav />
      <div style={{ minHeight: "75vh" }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/brands">
            <Brands />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/signup">
            {isAuthenticated ? <Dashboard /> : <Signup />}
          </Route>
          <Route exact path="/signin">
            {isAuthenticated ? <Dashboard /> : <Signin />}
          </Route>
          <Route exact path="/admin/login">
            {isAuthenticated ? <Dashboard /> : <AdminLogin />}
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/vendor/addProduct">
            <AddProductForm />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
