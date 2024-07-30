/* tiene la configuracion de expres */

import express from "express";
import ProjectRouter from "./routes/projects.routes.js";
import TaskRouter from "./routes/tasks.routes.js"

const app = express();

app.use(express.json()); /* esto es para que cada ves que se envie datos en formato json el servidor puedo interpretarlo, ademas que luego lo guarda en un req.body */

app.use(ProjectRouter);
app.use(TaskRouter);

export default app;
