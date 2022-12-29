import Business from "../models/Business.js";

export const getAllbusiness = async (req, res) => {
    let business;
    try {
        business = await Business.find();
    } catch (err) {
      return console.log(err);
    }
  
    if (!business) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
  
    return res.status(200).json({ business });
  };
  export const signup = async (req, res, next) => {
    const {  business_name, gst,address } = req.body;
    if (
      !business_name &&
      business_name.trim() === "" &&
       !gst &&
       gst.trim() === "" &&
      !address &&
      address.trim() === ""
      ) {
      return res.status(422).json({ message: "Inavalid Data" });
    }
  
    
  
    let business;
    try {
      business = new Business({business_name, gst,address });
      await business.save();
    } catch (err) {
      return console.log(err);
    }
  
    if (!business) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
  
    return res.status(201).json({ business });
  };