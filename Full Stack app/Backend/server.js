const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("App Started Here")
})

app.get("/users", (req,res) => {
    res.send('users')
})

app.listen(8000, () => {
    console.log("Kistening in Port 8000")
})

// const conncetFunction = async() => {
//     try {
//         const connection = await mongoose.connect(`process.dotEnv.MONGO_URL`);
//         console.log("Connected Database....");
//         connection.disconnect();

//     } catch (error) {
//         console.log(error);
//         console.log("Error connecting Happend...")
//     }
// }

// conncetFunction();
