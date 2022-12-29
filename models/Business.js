import mongoose, { model, Schema } from "mongoose";

const businessSchema = new Schema({
  business_name: {
    type: String,
    required: true,
  },
  gst: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
   },
  
});

export default model("Business", businessSchema);
// users
