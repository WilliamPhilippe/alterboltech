import { Router } from "express";

import ProjectController from "../controllers/ProjectsController";

const routes = Router();

const projectController = new ProjectController();

routes.post("/", projectController.createProject);
routes.put("/", projectController.updateProject);
routes.get("/", projectController.listProjects);
routes.delete("/", projectController.deleteProject);

export default routes;
