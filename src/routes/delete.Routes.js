import { Router } from "express";
import { deleteController } from "../controller/delete.controller.js";

const deleteRouter = Router()

deleteRouter.delete("/routeDelete",deleteController)

export{deleteRouter}