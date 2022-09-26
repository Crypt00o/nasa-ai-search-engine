import { Router } from "express";
import { searchResponser } from "../controllers/search";
import { mediaSearchApi } from "../controllers/search";


const searchRouter=Router();
searchRouter.route("/").get(searchResponser)
searchRouter.route("/media/:media").get(mediaSearchApi)

export {searchRouter,mediaSearchApi}