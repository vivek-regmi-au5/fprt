import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "./../redux/actions/form";

class Nav extends Component {
  render() {
    const handleSignout = () => {
      this.props.signOut();
    };
    return (
      <div>
        {" "}
        <nav class="navbar navbar-expand-md navbar-light bg-light ">
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
              <Link to="/products" class="nav-item nav-link">
                Products
              </Link>
              <Link to="/brands" class="nav-item nav-link">
                Brands
              </Link>
              {this.props.isAuthenticated ? (
                <div class="dropdown show">
                  <a
                    class="btn btn-light dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Profile
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link class="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                    <Link onClick={handleSignout} class="dropdown-item" to="/">
                      Signout
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to="/signup" class="nav-item nav-link">
                  Register
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { signOut })(Nav);
