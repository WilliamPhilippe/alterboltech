import { Router } from "express";

import TaskController from "../controllers/TaskController";

const routes = Router();

const taskController = new TaskController();

routes.post("/", taskController.createTask);
routes.put("/", taskController.markTaskAsChecked);
routes.get("/", taskController.listTasks);
routes.delete("/", taskController.deleteTask);

export default routes;
