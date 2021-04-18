import { Request, Response } from "express";

import UserServices from "../../../services/UserServices";

class UserController {
  private userService: UserServices;

  constructor() {
    this.userService = new UserServices();
  }

  async createUser(request: Request, response: Response): Promise<Response> {
    const userService = new UserServices();

    try {
      const newUser = await userService.createUser(request.body);

      return response
        .status(200)
        .json({ message: "User created!", user: newUser });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }
}

export default new UserController();
