const express = require("express");
require('./db/db.js');
const router = require("./Routes/Product.router.js");

const app = express();

app.use(express.json());
app.use(router)

app.listen(8080, () => {
  console.log(`Server started on port ${8080}`);
});












