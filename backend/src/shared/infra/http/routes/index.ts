import { Router } from "express";

import projectRouter from "../../../../modules/projects/infra/http/routes/project.routes";
import usersRouter from "../../../../modules/users/infra/http/routes/users.routes";
import authMiddleware from "../../../middlewares/auth";

const routes = Router();

routes.use("/users", usersRouter);
routes.use(authMiddleware);
routes.use("/projects", projectRouter);

export default routes;
