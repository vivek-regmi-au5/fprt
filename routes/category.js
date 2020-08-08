const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Category = require("./../models/Category");
require("dotenv").config();

// const Profile = require("../../models/Profile");
// const User = require("../../models/User");
// const Post = require("../../models/Post");

// @route  GET api/profile/me
// @desc   Test route
// @access Public
router.get("/test", (req, res) => {
  res.send("Test Route");
});

// @route  POST /category
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
      const category = await Category.findOne({ name: req.body.name });
      if (category) {
        return res
          .status(400)
          .json({ errors: [{ msg: "category name already exists." }] });
      } else {
        const { name, image, status } = req.body;

        // Build category object
        var categoryField = {};

        if (name) categoryField.name = name;
        if (status) categoryField.status = status;
        if (image) categoryField.image = image;
      }
      const newcategory = new Category(categoryField);
      console.log(newcategory);
      await newcategory.save();
      res.status(200).json({ newcategory });
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

// @route  GET /category
// @desc   Get all category
// @access Public
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.find();
    console.log(categoryData);
    res.status(200).json({ categorys: categoryData });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  Update /category/id
// @desc   update category
// @access Public
router.put("/:id", async (req, res) => {
  try {
    var category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({ msg: "No user found" });
    }

    // Build profile object
    const { name, image, status } = req.body;
    var categoryField = {};

    if (name) categoryField.name = name;
    if (status) categoryField.status = status;
    if (image) categoryField.image = image;

    category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      { $set: categoryField },
      { new: true }
    );
    return res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  GET /category/:id
// @desc   Get category by id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    var category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({ msg: "No category found" });
    }

    return res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  delete /category/:id
// @desc   delete category by id
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    var category = await Category.findOneAndDelete(req.params.id);
    console.log(category);

    return res.status(200).json({ msg: "category successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
