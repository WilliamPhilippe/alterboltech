import { Request, Response } from "express";

import SectionService from "../../../services/SectionService";

class SectionController {
  private sectionService: SectionService;

  constructor() {
    this.sectionService = new SectionService();
  }

  public async login(request: Request, response: Response): Promise<Response> {
    const sectionService = new SectionService();

    const { username, password } = request.body;
    try {
      const user = await sectionService.login({ username, password });
      return response.status(200).json({ Ok: "ok", user });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }
}

export default SectionController;
