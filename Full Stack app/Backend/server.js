const mongoose = require("mongoose");

const conncetFunction = async() => {
    try {
        const connection = await mongoose.connect('mongodb+srv://samsursekh:54321@cluster0.64g4nkm.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected Database....");
    } catch (error) {
        console.log(error);
    }
}

conncetFunction();
