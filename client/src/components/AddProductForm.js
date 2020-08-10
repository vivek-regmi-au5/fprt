import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Alert from "./Alert";
import { getBrands } from "./../redux/actions/brand";
import { getCategories } from "./../redux/actions/category";
import { addProduct } from "./../redux/actions/product";

const AddProductForm = ({
  getBrands,
  getCategories,
  brands,
  categories,
  userId,
  addProduct,
}) => {
  useEffect(() => {
    getBrands();
    getCategories();
  }, []);

  const [formData, setFormData] = useState({
    name: null,
    price: null,
    status: null,
    brand: null,
    category: null,
    people: userId,
    quantity: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(formData);
  };

  useEffect(() => {
    console.log(formData);
  });

  return (
    <div className="row">
      <div className="col-10 offset-1 mt-5" style={{ marginBottom: "90px" }}>
        <h1>Add new Product</h1>
        <div className="container mt-5">
          <Alert />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              {" "}
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter product name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  placeholder="Enter Price"
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label for="quantity">Quantity</label>
                <input
                  type="text"
                  class="form-control"
                  id="quantity"
                  placeholder="Enter quantity"
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div class="form-group">
                <label for="status">Status</label>
                <input
                  type="text"
                  class="form-control"
                  id="status"
                  placeholder="Enter status"
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label for="brand">Select Brand</label>
                <select
                  onChange={(e) => {
                    const res = brands.filter((brand) => {
                      return brand.name === e.target.value;
                    });
                    setFormData({ ...formData, brand: res[0]._id });
                  }}
                  class="form-control"
                  id="brand"
                >
                  {brands &&
                    brands.map((item) => {
                      return <option>{item.name}</option>;
                    })}
                </select>
              </div>
              <div class="form-group">
                <label for="category">Select Category</label>
                <select
                  onChange={(e) => {
                    const res = categories.filter((category) => {
                      return category.name === e.target.value;
                    });
                    setFormData({ ...formData, category: res[0]._id });
                  }}
                  class="form-control"
                  id="category"
                >
                  {categories &&
                    categories.map((item) => {
                      return <option>{item.name}</option>;
                    })}
                </select>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-lg btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts,
    userId: state.auth.user._id,
    brands: state.brands.brands,
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps, {
  getCategories,
  getBrands,
  addProduct,
})(AddProductForm);
