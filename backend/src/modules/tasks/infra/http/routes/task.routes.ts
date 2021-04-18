import { Router } from "express";

import TaskController from "../controllers/TaskController";

const routes = Router();

const taskController = new TaskController();

routes.post("/", taskController.createTask);
routes.put("/", taskController.markTaskAsChecked);
routes.get("/:projectId", taskController.listTasks);
routes.delete("/:id", taskController.deleteTask);

export default routes;
