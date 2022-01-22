const app = require("./index");

const start = async () => {
  app.listen(2233, () => {
    console.log("listing on port no 2233");
  });
};

start();
