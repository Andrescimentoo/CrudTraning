import { DataTypes,} from "sequelize"; 
import { database } from "../database/config-database.js";

const characthers = database.define("personagens",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    
    nome:{
       type: DataTypes.STRING,
       allowNull:false
    },

    idade: {
       type: DataTypes.STRING,
       allowNull:false
    },
    
    poderes: {
        type: DataTypes.STRING,
        allowNull:false
     },
     raca: {
        type: DataTypes.STRING,
        allowNull:false
     }

    

})

export{characthers}