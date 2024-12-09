const mongoose = require("mongoose");
require("dotenv").config();
const  MONGO_URL  = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB ;
