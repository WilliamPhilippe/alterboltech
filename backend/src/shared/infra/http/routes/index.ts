import { Router } from "express";

import projectRouter from "../../../../modules/projects/infra/http/routes/project.routes";
import tasksRouter from "../../../../modules/tasks/infra/http/routes/task.routes";
import usersRouter from "../../../../modules/users/infra/http/routes/users.routes";
import authMiddleware from "../../../middlewares/auth";

const routes = Router();

routes.use("/users", usersRouter);
routes.use(authMiddleware);
routes.use("/projects", projectRouter);
routes.use("/tasks", tasksRouter);

export default routes;
