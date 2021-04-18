import { Request, Response } from "express";

import ProjectServices from "../../../services/ProjectServices";

class ProjectController {
  private projectService: ProjectServices;

  constructor() {
    this.projectService = new ProjectServices();
  }

  async createProject(request: Request, response: Response): Promise<Response> {
    const projectService = new ProjectServices();
    try {
      const newProject = await projectService.createProject({
        name: request.body.name,
        ownerId: request.body.userId,
      });

      return response
        .status(200)
        .json({ message: "Project created!", project: newProject });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }

  async updateProject(request: Request, response: Response): Promise<Response> {
    const projectService = new ProjectServices();
    try {
      const updatedProject = await projectService.updateProject(
        request.body.id,
        request.body.name
      );

      return response
        .status(200)
        .json({ message: "Project updated!", project: updatedProject });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }

  async listProjects(request: Request, response: Response): Promise<Response> {
    const projectService = new ProjectServices();
    try {
      const projects = await projectService.findProjects(request.body.userId);

      return response.status(200).json({ projects });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }

  async deleteProject(request: Request, response: Response): Promise<Response> {
    const projectService = new ProjectServices();
    try {
      await projectService.deleteProject(request.params.projectId);

      return response
        .status(200)
        .json({ message: `Project ${request.params.projectId} deleted.` });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }
}

export default ProjectController;
