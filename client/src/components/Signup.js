import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { signupFormSubmit } from "./../redux/actions/form";
import { connect } from "react-redux";

const Signup = ({ signupFormSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [uploadPercent, setUpload] = useState(0);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    password: null,
    image: null,
    bio: null,
    status: null,
    type: "user",
  });

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vivekregmi");
    setLoading(true);

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dgq5a8zjh/image/upload",
      data,
      {
        onUploadProgress: (progressEvent) => {
          setUpload(
            Math.floor((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
      }
    );
    console.log("res from cloudinary: ", res.data.secure_url);
    setFormData({
      ...formData,
      image: res.data.secure_url,
    });
    setLoading(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    signupFormSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-center mt-5">Signup</h1>
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {" "}
            <div className="col-6 mt-5 " style={{ marginBottom: "90px" }}>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <div class="form-group">
                <label for="image">Example file input</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="image"
                  onChange={handleFileUpload}
                />
                {loading ? (
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: `${uploadPercent}%` }}
                      aria-valuenow={`${uploadPercent}`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {uploadPercent}%
                    </div>
                  </div>
                ) : (
                  <img src={formData.image} style={{ maxWidth: "50px" }} />
                )}
              </div>
            </div>
            <div className="col-6 mt-5" style={{ marginBottom: "90px" }}>
              <div class="form-group">
                <label for="userType">Select Type</label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  class="form-control"
                  id="userType"
                >
                  <option>user</option>
                  <option>vendor</option>
                </select>
              </div>
              <div class="form-group">
                <label for="status">Status</label>
                <input
                  type="text"
                  class="form-control"
                  id="status"
                  placeholder="Your status"
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label for="bio">Bio</label>
                <textarea
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  class="form-control"
                  id="bio"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        {" "}
        <button type="submit" class="btn btn-large btn-primary">
          Submit
        </button>
        <p>
          Already have an account? {<Link to="/signin">Signin</Link>} here{" "}
          <br />
          Are you admin? {<Link to="/admin/login">Admin Login</Link>} here
        </p>
      </div>
    </form>
  );
};

export default connect(null, { signupFormSubmit })(Signup);
