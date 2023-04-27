const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(`mongodb://0.0.0.0:27017/cogito`)
  .then(() => console.log(`db is connected`))
  .catch((error) => {
    console.log(error);
  });
