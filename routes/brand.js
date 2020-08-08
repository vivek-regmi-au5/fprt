const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Brand = require("./../models/Brand");
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

// @route  POST /brand
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
      const brand = await Brand.findOne({ name: req.body.name });
      if (brand) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Brand name already exists." }] });
      } else {
        const { name, image, status } = req.body;

        // Build brand object
        var brandField = {};

        if (name) brandField.name = name;
        if (status) brandField.status = status;
        if (image) brandField.image = image;
      }
      const newBrand = new Brand(brandField);
      
      await newBrand.save();
      res.status(200).json({ newBrand });
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

// @route  GET /brand
// @desc   Get all brand
// @access Public
router.get("/", async (req, res) => {
  try {
    const brandData = await Brand.find();
   
    res.status(200).json({ brands: brandData });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  Update /brand/id
// @desc   update brand
// @access Public
router.put("/:id", async (req, res) => {
  try {
    var brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(400).json({ msg: "No user found" });
    }

    // Build profile object
    const { name, image, status } = req.body;
    var brandField = {};

    if (name) brandField.name = name;
    if (status) brandField.status = status;
    if (image) brandField.image = image;

    brand = await Brand.findOneAndUpdate(
      { _id: req.params.id },
      { $set: brandField },
      { new: true }
    );
    return res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  GET /brand/:id
// @desc   Get brand by id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    var brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(400).json({ msg: "No brand found" });
    }

    return res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  delete /brand/:id
// @desc   delete brand by id
// @access Public
router.delete("/:id", async (req, res) => {
  try {
     await Brand.findOneAndDelete(req.params.id);
    

    return res.status(200).json({ msg: "Brand successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
