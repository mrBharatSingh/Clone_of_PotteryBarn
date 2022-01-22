const app = require("./index");
const env = require("dotenv");

const start = async () => {
  app.listen(process.env.PORT || 2233, () => {
    console.log("listing on port no 2233");
  });
};

start();
