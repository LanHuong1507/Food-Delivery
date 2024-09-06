import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://lanhuong:147852369@cluster0.kvqu5.mongodb.net/food-delivery').then(() => console.log('MongoDB Connected'));
}