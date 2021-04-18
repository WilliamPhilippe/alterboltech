import { Router } from "express";

import SectionController from "../controllers/SectionController";
import UsersController from "../controllers/UsersController";

const routes = Router();

const usersController = new UsersController();
const sectionController = new SectionController();

routes.post("/", usersController.createUser);
routes.post("/login", sectionController.login);

export default routes;
