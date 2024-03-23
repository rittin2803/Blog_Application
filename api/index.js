import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Database Connected");
} catch (error) {
    console.log("Error connecting to Database");
}

app.listen(3000, () => {
    console.log("Server is running");
});