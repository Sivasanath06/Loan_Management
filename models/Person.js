import mongoose, { model, Schema } from "mongoose";

const personSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },
});

export default model("Person", personSchema);
// users
