import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Products from "./components/Products";

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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
