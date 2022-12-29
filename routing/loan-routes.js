import { Router } from "express";
import { getAllLoan, signup } from "../controllers/loan-con.js";
const loanRouter = Router();

loanRouter.get("/", getAllLoan);
loanRouter.post("/signup", signup);
export default loanRouter;
