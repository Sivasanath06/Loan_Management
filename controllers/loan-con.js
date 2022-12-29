import Loan from "../models/Loan.js";

export const getAllLoan = async (req, res) => {
    let loan;
    try {
        loan = await Loan.find();
    } catch (err) {
      return console.log(err);
    }
  
    if (!loan) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
  
    return res.status(200).json({ loan });
  };
  export const signup = async (req, res, next) => {
    const { loan_amount, interest,tenure,type_loan } = req.body;
    if (
      !interest &&
      interest  .trim() === "" &&
       !tenure &&
      tenure.trim() === "" &&
      !type_loan &&
      type_loan.trim() === "" &&
     !loan_amount
      ) {
      return res.status(422).json({ message: "Inavalid Data" });
    }
  
    
  
    let loan;
    try {
      loan = new Loan({  loan_amount, interest,tenure,type_loan });
      await loan.save();
    } catch (err) {
      return console.log(err);
    }
  
    if (!loan) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
  
    return res.status(201).json({ loan });
  };