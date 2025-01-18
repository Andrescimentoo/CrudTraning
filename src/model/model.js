import { DataTypes,} from "sequelize"; 
import { database } from "../database/config-database.js";

const characthers = database.define("personagens",{
     id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
     
     nome: {
       type: DataTypes.STRING,
     },
     
     idade: {
       type: DataTypes.INTEGER,
     },
     
     poderes: {
       type: DataTypes.TEXT,
     },
    
     tipoDeRaca: {
       type: DataTypes.STRING,
     }
    }, {
      timestamps: false, // Desativa os campos createdAt e updatedAt
    });
    

export{characthers}