const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Person = require("../models/Person");
require("dotenv").config;

// const Profile = require("../../models/Profile");
// const User = require("../../models/User");
// const Post = require("../../models/Post");

// @route  GET api/profile/me
// @desc   Test route
// @access Public
router.get("/test", (req, res) => {
  res.send("Test Route");
});

// @route  POST /people/signup
// @desc   Signup route
// @access Public
router.post(
  "/signup",
  [
    check("name", "Name cannot be empty").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("type", "Type is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password with minimum length 8"
    ).isLength({ min: 8 }),
  ],

  async (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check for admin credentials**************************************************************
      if (req.body.type === "admin") {
        if (
          req.body.password === process.env.ADMIN_PASSWORD &&
          req.body.email === process.env.ADMIN_EMAIL
        ) {
          return res.status(200).json({
            authenticated: true,
            admin: true,
            email: "vivek3639@gmail.com",
            type: "admin",
          });
        } else {
          return res
            .status(400)
            .json({ msg: "Incorrect email password combination" });
        }
      }
      //******************************************************************************************

      // Check if email exists *******************************************************************
      const person = await Person.findOne({ email: req.body.email });
      if (person) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      } else {
        const { name, email, password, image, bio, status, type } = req.body;

        // Build profile object
        var personField = {};

        if (name) personField.name = name;
        if (email) personField.email = email;
        if (password) personField.password = password;
        if (bio) personField.bio = bio;
        if (status) personField.status = status;
        if (type) personField.type = type;
        if (image) personField.image = image;
      }
      const newPerson = new Person(personField);

      await newPerson.save();
      res.status(200).json({ newPerson });

      //******************************************************************************************
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

// @route  POST /people/signin
// @desc   Login route
// @access Public
router.post(
  "/signin",
  [
    check("email", "Email is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password with minimum length 8"
    ).isLength({ min: 8 }),
  ],

  async (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check for admin credentials**************************************************************
      console.log(req.body);
      if (
        req.body.password === process.env.ADMIN_PASSWORD &&
        req.body.email === process.env.ADMIN_EMAIL
      ) {
        return res.status(200).json({
          authenticated: true,
          admin: true,
          email: "vivek3639@gmail.com",
        });
      } else {
        const person = await Person.findOne({ email: req.body.email });
        console.log(person);
        if (!person) {
          return res
            .status(400)
            .json({ errors: [{ msg: "No user found. Signup instead" }] });
        } else {
          if (req.body.password !== person.password) {
            return res
              .status(400)
              .json({ errors: [{ msg: "Incorrect email or password" }] });
          } else {
            return res.status(200).json(person);
          }
        }
      }

      //******************************************************************************************

      //******************************************************************************************
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

// @route  GET /people
// @desc   Get all people
// @access Public
router.get("/", async (req, res) => {
  try {
    const personData = await Person.find();

    res.status(200).json({ persons: personData });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  Update /people/id
// @desc   update people
// @access Public
router.put("/:id", async (req, res) => {
  try {
    var person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(400).json({ msg: "No user found" });
    }

    // Build profile object
    const { name, email, password, image, bio, status, type } = req.body;
    var personField = {};

    if (name) personField.name = name;
    if (email) personField.email = email;
    if (password) personField.password = password;
    if (bio) personField.bio = bio;
    if (status) personField.status = status;
    if (type) personField.type = type;
    if (image) personField.image = image;

    person = await Person.findOneAndUpdate(
      { _id: req.params.id },
      { $set: personField },
      { new: true }
    );
    return res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  GET /people/:id
// @desc   Get people by id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    var person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(400).json({ msg: "No user found" });
    }

    return res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  delete /people/:id
// @desc   delete people by id
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    var person = await Person.findOneAndDelete(req.params.id);

    return res.status(200).json({ msg: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
