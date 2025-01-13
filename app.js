import express from "express"
import { routeGet } from "./src/routes/get.Routes.js"

const app = express()
const Port = 3000

app.use(routeGet)

app.listen(Port,() => {
    console.log("server started!") 
})
