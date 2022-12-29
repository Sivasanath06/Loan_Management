import { Router } from "express";
import { getAllbusiness, signup } from "../controllers/buusiness-con.js";
const businessRouter = Router();
businessRouter.get("/", getAllbusiness);
businessRouter.post("/signup", signup);
export default businessRouter;

