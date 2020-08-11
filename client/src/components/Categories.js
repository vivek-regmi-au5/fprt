import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Spinner from "./Spinner";
import { getCategories } from "./../redux/actions/category";

const Categories = ({ getCategories, type, categories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div>{!categories && <Spinner />}</div>
      <div className="container">
        <h1 className="my-4">Categories</h1>
        {categories && (
          <div className="row">
            {categories.map((item) => {
              return (
                <div
                  key={item._id}
                  class="col-4 card my-2"
                  style={{ width: "15rem" }}
                >
                  <img
                    class="card-img-top"
                    style={{ maxHeight: "14rem" }}
                    src={item.image}
                    alt="Card cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>

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
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    type: state.auth.type,
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps, { getCategories })(Categories);
