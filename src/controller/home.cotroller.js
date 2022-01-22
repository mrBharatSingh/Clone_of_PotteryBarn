const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.log(error);
  }
});

router.get("/index", async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.log(error);
  }
});

router.get("/furniture", async (req, res) => {
  try {
    res.render("furniture");
  } catch (error) {
    console.log(error);
  }
});
router.get("/chairs", async (req, res) => {
  try {
    res.render("chairs");
  } catch (error) {
    console.log(error);
  }
});

router.get("/products", async (req, res) => {
  try {
    res.render("products");
  } catch (error) {
    console.log(error);
  }
});

router.get("/shoppingcart", async (req, res) => {
  try {
    res.render("shoppingcart");
  } catch (error) {
    console.log(error);
  }
});

router.get("/checkout", async (req, res) => {
  try {
    res.render("checkout");
  } catch (error) {
    console.log(error);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
