import React, { useEffect } from "react";
import { connect } from "react-redux";

const DashboardVendor = ({ user }) => {
  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-4">
          <img src={user.image} className="img-fluid" />
        </div>
        <div className="col-4">
          <h3>{user.name}</h3>
          <p>{user.bio || "Vendor"}</p>
          <p>{user.status || "Available"}</p>
        </div>
      </div>
      <button className="btn btn-outline-primary mb-5 mt-3">Update</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(DashboardVendor);
