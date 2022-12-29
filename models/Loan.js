import mongoose, { model, Schema } from "mongoose";

const loanSchema = new Schema({
  loan_amount: {
    type: Number,
    required: true,
  },
  interest: {
    type: String,
    required: true,
    
  },
  tenure: {
    type: String,
    required: true,
   },
   type_loan:{
    type:String,
    required:true,
   }
  
});

export default model("Loan", loanSchema);
// users
