import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVendorProducts } from "./../redux/actions/vendor";
import { Link } from "react-router-dom";

const DashboardVendor = ({ user, getVendorProducts, vendorData }) => {
  useEffect(() => {
    getVendorProducts(user._id);
  }, []);

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
      <button className="btn btn-outline-primary mb-5 mt-3">
        Update Profile
      </button>
      <br />
      <Link
        to="/vendor/addProduct"
        className="btn btn-block btn-primary mb-5 mt-3"
      >
        Add Product
      </Link>
      <div className="row">
        {vendorData &&
          vendorData.map((item) => {
            return (
              <div class="col-4 card my-2" style={{ width: "15rem" }}>
                <img
                  class="card-img-top"
                  style={{ maxHeight: "14rem" }}
                  src={item.image}
                  alt="Card cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-title">{item.status}</p>
                  <p class="card-title">Rs. {item.price}</p>
                  <p class="card-title">quantity: {item.quantity}</p>

                  <a href="#" class="btn btn-primary">
                    Update
                  </a>
                  <a href="#" class="btn btn-danger">
                    Remove
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    vendorData: state.vendorProducts.products,
  };
};

export default connect(mapStateToProps, { getVendorProducts })(DashboardVendor);
