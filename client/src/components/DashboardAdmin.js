import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const DashboardAdmin = () => {
  const [selected, setSelected] = useState("users");

  return (
    <div className="container">
      <h1 className="my-5 text-center">This is admin page</h1>
      <nav class="nav nav-pills nav-fill">
        <button
          style={{
            border: "1px solid grey",
          }}
          class="nav-item"
        >
          Users
        </button>
        <button
          style={{
            border: "1px solid grey",
          }}
          class="nav-item nav-link"
        >
          Products
        </button>
        <button
          style={{
            border: "1px solid grey",
          }}
          class="nav-item nav-link"
        >
          Categories
        </button>
        <button
          style={{
            border: "1px solid grey",
          }}
          class="nav-item nav-link"
        >
          Brands
        </button>
      </nav>
      <h1 className="my-4">Users</h1>
      <div></div>
    </div>
  );
};

export default connect()(DashboardAdmin);
