import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardAdmin from "./DashboardAdmin";
import DashboardUser from "./DashboardUser";
import DashboardVendor from "./DashboardVendor";

const Dashboard = ({ isAuthenticated, type, user }) => {
  return (
    <div>
      {isAuthenticated && type === "user" && <DashboardUser />}
      {isAuthenticated && type === "vendor" && <DashboardVendor />}
      {isAuthenticated && type === "admin" && <DashboardAdmin />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    type: state.auth.type,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
