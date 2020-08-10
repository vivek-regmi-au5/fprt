import React, { useState } from "react";
import { Link } from "react-router-dom";
import { adminFormSubmit } from "./../redux/actions/form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Alert from "./Alert";

const AdminLogin = ({ adminFormSubmit }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await adminFormSubmit(formData);
  };

  const [formData, setFormData] = useState({
    name: "admin",
    admin: null,
    type: "admin",
    email: null,
  });

  return (
    <div className="row">
      <div className="col-4 offset-4 mt-5" style={{ marginBottom: "90px" }}>
        <h1>Admin Login</h1>
        <div className="container mt-5">
          <Alert />
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
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
  connect(mapStateToProps, { adminFormSubmit })(AdminLogin)
);
