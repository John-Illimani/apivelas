/*  este es el encargado de arrancar la api  */

import app from "./app.js";
import { sequelize } from "./database/database.js";

import './models/Projects.js';
import './models/Task.js';

/* para las variables de entorno */

import { PORT } from "./routes/config.js"



async function main() {
  try {

    /* await sequelize.authenticate(); */  /* manera de probar la conexion a la BD */


    await sequelize.sync({force:false}); /* el trata de crear las tablas */  
    /* aqui el force:true se pone para que los campos adicionales que se crean en la tablas con sequelize se AudioBufferSourceNode, esos campos son los de createdAt, updateAt */
    console.log("conexion exitosa a la base de datos");


   
    app.listen(PORT);
    console.log("el servidor se esta ejecutando en el puerto ", PORT);
    /* con esto tengo un servidor basico */

    /* ------------------ ------------------ ------------------ ------------------ ------------------*/


  } catch (error) {
    console.log("error al conectar a la base de datos",error);
  }
}

main();

/* "type":"module",  esto es para manejar los import y los export, y esto debe estar en el package.json*/
