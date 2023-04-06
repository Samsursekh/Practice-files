const mongoose = require("mongoose");
const dotEnv = require("dotenv");

const conncetFunction = async() => {
    try {
        const connection = await mongoose.connect(`process.dotEnv.MONGO_URL`);
        console.log("Connected Database....");
        connection.disconnect();

    } catch (error) {
        console.log(error);
        console.log("Error connecting Happend...")
    }
}

conncetFunction();
