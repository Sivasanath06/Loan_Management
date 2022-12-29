import { Router } from "express";
import { getAllPerson, signup } from "../controllers/person-con.js";
const personRouter = Router();

personRouter.get("/", getAllPerson);
personRouter.post("/signup", signup);
export default personRouter;
