import express from "express"
import { routesCharacthers } from "./src/routes/characthers.routes.js"

const app = express()
const Port = 3000

app.use(express.json())

app.use(routesCharacthers)


try {
    app.listen(Port, () => {
        console.log(`Aplicação está rodando em: http://localhost:${Port}!`);
    });
} catch (error) {
    console.log('Erro ao rodar aplicação!', error);
}

export default app