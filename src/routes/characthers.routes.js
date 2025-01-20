import { Router } from "express";
import { findAllCharacthers } from "../controller/findAll.Chacarcther.controller.js";
import { createCharacther } from "../controller/create.Characther.controller.js";
import { updateChacarther } from "../controller/update.Chacarther.controller.js";
import { destroyCharacther } from "../controller/destroy.Characther.controller.js";


const routesCharacthers = Router()

routesCharacthers.get("/getCharacters",findAllCharacthers)
routesCharacthers.post("/postCharacthers",createCharacther)
routesCharacthers.put("/putCharacther",updateChacarther)
routesCharacthers.delete("/deleteCharacther",destroyCharacther)





export{routesCharacthers}