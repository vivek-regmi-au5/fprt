import React, { Component } from "react";
import Carousal from "./Carousal";
import { connect } from "react-redux";
import axios from "axios";
import Spinner from "./Spinner";

class Home extends Component {
  state = {
    loading: true,
    data: null,
  };

  componentDidMount = async () => {
    const category = await axios.get("/category");
    console.log(category);
    this.setState({
      loading: false,
      data: category.data.categorys,
    });
  };

  render() {
    const { loading, data } = this.state;
    return (
      <div>
        <Carousal />
        <div>{loading && <Spinner />}</div>
        <div className="container">
          <h1 className="my-4">Shop by category</h1>
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

export default connect()(Home);
