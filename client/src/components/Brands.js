import React, { Component } from "react";
import Carousal from "./Carousal";
import { connect } from "react-redux";
import axios from "axios";
import Spinner from "./Spinner";
import { getBrands, deleteBrand } from "./../redux/actions/brand";

class Brands extends Component {
  componentDidMount = async () => {
    await this.props.getBrands();
  };

  handleDeleteBrand = async (id) => {
    await this.props.deleteBrand(id);
  };

  render() {
    return (
      <div>
        <div>{!this.props.brands && <Spinner />}</div>
        <div className="container">
          <h1 className="my-4">All brands</h1>
          {this.props.brands && (
            <div className="row">
              {this.props.brands.map((item) => {
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

                      {this.props.type === "admin" ? (
                        [
                          <button key={1} class="btn btn-primary">
                            Update
                          </button>,
                          <button
                            key={2}
                            onClick={() => {
                              console.log(item._id);
                              console.log(item.name);
                              this.handleDeleteBrand(item._id);
                            }}
                            class="btn btn-danger"
                          >
                            Remove
                          </button>,
                        ]
                      ) : (
                        <a href="#" class="btn btn-primary">
                          Shop Now
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.auth.type,
    brands: state.brands.brands,
  };
};

export default connect(mapStateToProps, { getBrands, deleteBrand })(Brands);
