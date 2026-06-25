import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "resume-builder", // Your database name
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};