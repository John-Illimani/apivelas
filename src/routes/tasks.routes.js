import { Router } from "express";
import { createTasks, deleteTasks, getTask, getTasks, updateTasks } from "../controllers/tasks.controller.js";

const route = Router();

route.get("/tasks",getTasks);
route.get("/tasks/:id",getTask);
route.post("/tasks",createTasks);
route.put("/tasks/:id",updateTasks);
route.delete("/tasks/:id",deleteTasks);

export default route;