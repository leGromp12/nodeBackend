import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // для лабораторної без хешування
});

export const User = mongoose.model("User", userSchema);
