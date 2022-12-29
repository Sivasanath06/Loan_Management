import Person from "../models/Person.js";

export const getAllPerson = async (req, res) => {
    let person;
    try {
        person = await Person.find();
    } catch (err) {
      return console.log(err);
    }
  
    if (!person) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
  
    return res.status(200).json({ person });
  };
  export const signup = async (req, res, next) => {
    const { first_name, last_name,email,age,mobile_number } = req.body;
    if (
      !first_name &&
      first_name.trim() === "" &&
      !last_name &&
      last_name.trim() === "" &&
      !email &&
      email.trim() === "" &&
      !age && !mobile_number
      ) {
      return res.status(422).json({ message: "Inavalid Data" });
    }
  
    
  
    let person;
    try {
      person = new Person({ first_name, last_name,email,age,mobile_number  });
      await person.save();
    } catch (err) {
      return console.log(err);
    }
  
    if (!person) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
  
    return res.status(201).json({ person });
  };