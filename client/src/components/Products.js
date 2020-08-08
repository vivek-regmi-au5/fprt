import React, { Component } from "react";
import Carousal from "./Carousal";
import { connect } from "react-redux";
import axios from "axios";
import Spinner from "./Spinner";

class Products extends Component {
  state = {
    loading: true,
    data: null,
  };

  componentDidMount = async () => {
    const product = await axios.get("http://localhost:7878/product");
    console.log(product);
    this.setState({
      loading: false,
      data: product.data.products,
    });
  };

  render() {
    const { loading, data } = this.state;
    return (
      <div>
        <div>{loading && <Spinner />}</div>
        <div className="container">
          <h1 className="my-4">All products</h1>
          {!loading && (
            <div className="row">
              {data.map((item) => {
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

                      <a href="#" class="btn btn-primary">
                        Shop Now
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
  }
}

export default connect()(Products);
