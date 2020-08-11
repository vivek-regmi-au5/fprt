import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import { getUsers, deleteUser } from "./../redux/actions/user";

class Users extends Component {
  handleDeleteUser = async (id) => {
    await this.props.deleteUser(id);
  };

  componentDidMount = async () => {
    await this.props.getUsers();
  };

  render() {
    return (
      <div>
        <div>{!this.props.users && <Spinner />}</div>
        <div className="container">
          <h1 className="my-4">All Users</h1>
          {this.props.users && (
            <div className="row">
              {this.props.users.map((item) => {
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
                      <button class="btn btn-primary">Update</button>
                      <button
                        onClick={() => this.handleDeleteUser(item._id)}
                        class="btn btn-danger"
                      >
                        Remove
                      </button>
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
    users: state.users.users,
  };
};

export default connect(mapStateToProps, { getUsers, deleteUser })(Users);
