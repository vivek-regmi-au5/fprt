import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signinFormSubmit } from "./../redux/actions/form";
import { connect } from "react-redux";
import Alert from "./Alert";
import { withRouter } from "react-router-dom";

const Signin = ({ signinFormSubmit }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signinFormSubmit(formData);
  };

  const [formData, setFormData] = useState({
    email: null,
    password: null,
  });

  return (
    <div className="row">
      <div className="col-4 offset-4 mt-5" style={{ marginBottom: "90px" }}>
        <h1>SignIn</h1>
        <div className="container mt-5">
          <Alert />
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <p>
            Dont have an account? {<Link to="/signup">Signup</Link>} here <br />
            Are you admin? {<Link to="/admin/login">Admin Login</Link>} here
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts,
  };
};

export default withRouter(
  connect(mapStateToProps, { signinFormSubmit })(Signin)
);
