import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import personRouter from "./routing/person-routes.js";
import loanRouter from "./routing/loan-routes.js";
import businessRouter from "./routing/business-routes.js";
import path from 'path'
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/person", personRouter);
app.use("/loan", loanRouter);
app.use("/business", businessRouter);
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
mongoose
  .connect(
    `mongodb+srv://Sivasanath:${process.env.MONGODB_PASSWORD}@cluster0.c7bpxin.mongodb.net/?retryWrites=true&w=majority`
  )
  var db=mongoose.connection;
  db.on('connected',()=>{
      console.log('Database connnected succesfully');
  })
  db.on('error',()=>{
      console.log('Database connection failed');
  })
  const port =process.env.PORT||5000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));