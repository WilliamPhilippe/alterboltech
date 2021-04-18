import { ITaskDTO } from "../infra/schema/Tasks";
import TaskRepository, {
  ITaskResponse,
  ITaskAsChecked,
} from "../repositories/TaskRepostories";

class TaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  public async createTask(data: ITaskDTO): Promise<ITaskResponse> {
    if (!data.description || !data.projectId) {
      const err = new Error("Description and projectId are required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    const newTask = await this.taskRepository.createTask({
      ...data,
      created_at: new Date(),
    });
    return newTask;
  }

  public async markTaskAsChecked({
    id,
  }: ITaskAsChecked): Promise<ITaskResponse | null> {
    if (!id) {
      const err = new Error("Description and projectId are required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    const updatedTask = await this.taskRepository.markTaskAsChecked({
      id,
      finished: true,
      finished_at: new Date(),
    });
    return updatedTask;
  }

  public async listTasks(projectId: string): Promise<ITaskResponse[]> {
    if (!projectId) {
      const err = new Error("ProjectId is required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    const tasks = await this.taskRepository.listTaskByProject(projectId);
    return tasks;
  }

  public async deleteTask(id: string): Promise<void> {
    if (!id) {
      const err = new Error("Id is required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    await this.taskRepository.deleteTask(id);
  }
}

export default TaskService;
