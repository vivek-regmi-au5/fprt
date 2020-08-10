import React, { Component } from "react";
import Carousal from "./Carousal";
import { connect } from "react-redux";
import axios from "axios";
import Spinner from "./Spinner";

class Users extends Component {
  state = {
    loading: true,
    data: null,
  };

  componentDidMount = async () => {
    const people = await axios.get("http://localhost:7878/people");
    console.log("people data: ", people);
    this.setState({
      loading: false,
      data: people.data.persons,
    });
  };

  render() {
    const { loading, data } = this.state;
    return (
      <div>
        <div>{loading && <Spinner />}</div>
        <div className="container">
          <h1 className="my-4">All Users</h1>
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
                      <p>{item.type}</p>
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
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.auth.type,
  };
};

export default connect(mapStateToProps)(Users);
