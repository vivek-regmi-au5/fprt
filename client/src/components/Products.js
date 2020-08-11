import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import { getProducts, deleteProduct } from "./../redux/actions/product";

class Products extends Component {
  componentDidMount = async () => {
    await this.props.getProducts();
  };

  handleDeleteProduct = async (id) => {
    await this.props.deleteProduct(id);
  };

  render() {
    return (
      <div>
        <div>{!this.props.products && <Spinner />}</div>
        <div className="container">
          <h1 className="my-4">All products</h1>
          {this.props.products && (
            <div className="row">
              {this.props.products.map((item) => {
                return (
                  <div class="col-4 card my-2" style={{ width: "15rem" }}>
                    <img
                      class="card-img-top"
                      style={{ height: "14rem" }}
                      src={item.image}
                      alt="Card cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>

                      {this.props.type === "admin" ? (
                        [
                          <button class="btn btn-primary">Update</button>,
                          <button
                            onClick={() => this.handleDeleteProduct(item._id)}
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
    products: state.products.products,
  };
};

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  Products
);
