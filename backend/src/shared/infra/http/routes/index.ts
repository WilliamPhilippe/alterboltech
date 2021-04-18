import { Router } from "express";

import usersRouter from "../../../../modules/users/infra/http/routes/users.routes";
import authMiddleware from "../../../middlewares/auth";

const routes = Router();

routes.use("/users", usersRouter);
routes.use(authMiddleware);

export default routes;
