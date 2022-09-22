import { Router } from "express";
import { searchResponser } from "../controllers/search";

const searchRouter=Router();
searchRouter.route("/").get(searchResponser)


export {searchRouter}