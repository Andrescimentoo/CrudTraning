import { Router } from "express";
import { getcontroller } from "../controller/Get.controller.js";

const routeGet = Router()

routeGet.get("/getCharacters",getcontroller)

export{routeGet}