const express = require("express");

const app = express();

app.use(express.json());
const cors = require("cors");

app.use(cors());

app.set("view engine", "ejs");
app.use(express.static("public"));

const homeRouterhandler = require("./controller/home.cotroller");
// const furnitureRoutehandler = require("./controller");

app.use("", homeRouterhandler);

// app.use("/furniture", homeRouterhandler);

module.exports = app;
