import { Router } from "express";
import { postController } from "../controller/post.controller.js";

const postRouter = Router()
postRouter.post("/routePost",postController)

export {postRouter}
 