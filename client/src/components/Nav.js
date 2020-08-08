import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        {" "}
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
          <Link to="/" class="navbar-brand">
            CMSLogo
          </Link>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <form
              class="form-inline my-2 my-lg-0"
              style={{ marginLeft: "25%" }}
            >
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <div class="navbar-nav ml-auto">
              <Link to="/movie" class="nav-item nav-link">
                Movie
              </Link>
              <Link to="/soap" class="nav-item nav-link">
                Soap
              </Link>
              <Link to="/signup" class="nav-item nav-link">
                Register
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
