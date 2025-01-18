import express from "express"
import { routeGet } from "./src/routes/get.Routes.js"
import { putRouter } from "./src/routes/put.Routes.js"

const app = express()
const Port = 3000

app.use(express.json())

app.use(routeGet)
app.use(putRouter)

try {
    app.listen(Port, () => {
        console.log(`Aplicação está rodando em: http://localhost:${Port}!`);
    });
} catch (error) {
    console.log('Erro ao rodar aplicação!', error);
}

export default app