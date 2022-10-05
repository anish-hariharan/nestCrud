/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
