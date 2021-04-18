import { Request, Response } from "express";

import TaskServices from "../../../services/TaskServices";

class TaskController {
  private taskService: TaskServices;

  constructor() {
    this.taskService = new TaskServices();
  }

  public async createTask(
    request: Request,
    response: Response
  ): Promise<Response> {
    const taskService = new TaskServices();

    try {
      const newTask = await taskService.createTask(request.body);

      return response
        .status(200)
        .json({ message: "Task created!", task: newTask });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }

  public async markTaskAsChecked(
    request: Request,
    response: Response
  ): Promise<Response> {
    const taskService = new TaskServices();

    try {
      const updatedTask = await taskService.markTaskAsChecked(request.body);

      return response
        .status(200)
        .json({ message: "Task updated!", task: updatedTask });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }

  public async listTasks(
    request: Request,
    response: Response
  ): Promise<Response> {
    const taskService = new TaskServices();

    try {
      const tasks = await taskService.listTasks(request.params.projectId);

      return response.status(200).json({ message: "Tasks!", tasks });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }

  public async deleteTask(
    request: Request,
    response: Response
  ): Promise<Response> {
    const taskService = new TaskServices();

    try {
      await taskService.deleteTask(request.body.id);

      return response
        .status(200)
        .json({ message: `Task ${request.body.id} deleted` });
    } catch (err) {
      return response
        .status(err.status)
        .json({ message: "An error has happened", error: err.message });
    }
  }
}

export default TaskController;
