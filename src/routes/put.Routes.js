import { putcontroller } from "../controller/put.controller.js";
import { Router } from "express";

const putRouter = Router()
putRouter.put("/putCharacters",putcontroller)

export{putRouter}