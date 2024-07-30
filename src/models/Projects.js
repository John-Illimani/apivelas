import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";  /* trayendo la conecion de la base de datos */
import { Task } from "./Task.js";

export const Project = sequelize.define('projects',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
    },
    priority:{
        type:DataTypes.INTEGER
    },
    description:{
        type:DataTypes.STRING
    }


},{
    timestamps:false
});





/* esto es para relacionar muchas tareas con un solo proyecto */
Project.hasMany(Task,{
    foreignKey: "projectId",  /* este es el como se lllam la llave foranea creada */
    sourceKey:"id"  /* la referencia */
});

Task.belongsTo(Project,{
    foreignKey: "projectId",  /* este es el como se lllam la llave foranea creada */
    targetId:"id"  /* la referencia */
})