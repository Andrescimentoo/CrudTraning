import { Sequelize } from "sequelize";

const database = new Sequelize("Atributes_players", "root","A19551947b",{
    host:"localhost",
    dialect: "mysql"
})

export{database}
