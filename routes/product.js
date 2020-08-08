const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Product = require("./../models/Product");
require("dotenv").config();

// const Profile = require("../../models/Profile");
const Person = require("./../models/Person");
// const Post = require("../../models/Post");

// @route  GET api/profile/me
// @desc   Test route
// @access Public
router.get("/test", (req, res) => {
  res.send("Test Route");
});

// @route  POST /product
// @desc   Signup route
// @access Public
router.post(
  "/",
  [check("name", "Name cannot be empty").not().isEmpty()],

  async (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const product = await Product.findOne({ name: req.body.name });
      if (product) {
        return res
          .status(400)
          .json({ errors: [{ msg: "product name already exists." }] });
      } else {
        const {
          name,
          image,
          status,
          price,
          quantity,
          people,
          category,
          brand,
        } = req.body;

        // Build product object
        var productField = {};

        if (name) productField.name = name;
        if (status) productField.status = status;
        if (image) productField.image = image;
        if (price) productField.price = price;
        if (quantity) productField.quantity = quantity;
        if (brand) productField.brand = brand;
        if (category) productField.category = category;
        if (people) productField.people = people;
      }
      const newproduct = new Product(productField);
      console.log(newproduct);
      await newproduct.save();
      res.status(200).json({ newproduct });
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

// @route  GET /product
// @desc   Get all product
// @access Public
router.get("/", async (req, res) => {
  try {
    const productData = await Product.find().populate("person");

    console.log(productData);
    res.status(200).json({ products: productData });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  Update /product/id
// @desc   update product
// @access Public
router.put("/:id", async (req, res) => {
  try {
    var product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ msg: "No user found" });
    }

    // Build profile object
    const {
      name,
      image,
      status,
      price,
      quantity,
      people,
      category,
      brand,
    } = req.body;
    var productField = {};

    if (name) productField.name = name;
    if (status) productField.status = status;
    if (image) productField.image = image;
    if (price) productField.price = price;
    if (quantity) productField.quantity = quantity;
    if (brand) productField.brand = brand;
    if (category) productField.category = category;
    if (people) productField.people = people;

    product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: productField },
      { new: true }
    );

    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  GET /product/:id
// @desc   Get product by id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    var product = await Product.findById(req.params.id)
      .populate("user")
      .populate("brand")
      .populate("category");
    if (!product) {
      return res.status(400).json({ msg: "No product found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  delete /product/:id
// @desc   delete product by id
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    var product = await Product.findOneAndDelete(req.params.id);
    console.log(product);

    return res.status(200).json({ msg: "product successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
