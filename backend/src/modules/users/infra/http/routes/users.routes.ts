import { Router } from "express";

import SectionController from "../controllers/SectionController";
import UsersController from "../controllers/UsersController";

const routes = Router();

routes.post("/", UsersController.createUser);
routes.post("/login", SectionController.login);

export default routes;
