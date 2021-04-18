import Task, { ITaskDTO } from "../infra/schema/Tasks";

export interface ITaskResponse {
  description?: string;
  finished?: boolean;
  created_at?: Date;
  finished_at?: Date;
  projectId?: string;
  id?: string;
}

export interface ITaskAsChecked {
  finished_at?: Date;
  finished: boolean;
  id: string;
}

class TaskRepository {
  public async createTask(data: ITaskDTO): Promise<ITaskResponse> {
    try {
      const newTask = await Task.create(data);
      return newTask;
    } catch (err) {
      Object.assign(err, { status: 500 });
      throw err;
    }
  }

  public async markTaskAsChecked({
    id,
    finished_at,
    finished,
  }: ITaskAsChecked): Promise<ITaskResponse | null> {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { finished, finished_at },
        { new: true }
      );

      if (!updatedTask) {
        const err = new Error("This task does not exist.");
        Object.assign(err, { status: 404 });
        throw err;
      }

      return updatedTask;
    } catch (err) {
      Object.assign(err, { status: 500 });
      throw err;
    }
  }

  public async listTaskByProject(projectId: string): Promise<ITaskResponse[]> {
    try {
      const tasks = await Task.find(
        { projectId },
        {
          id: "$_id",
          _id: 0,
          description: 1,
          finished: 1,
          finished_at: 1,
          created_at: 1,
        }
      );
      return tasks;
    } catch (err) {
      Object.assign(err, { status: err.status || 500 });
      throw err;
    }
  }

  public async deleteTask(id: string): Promise<void> {
    try {
      const task = await Task.findByIdAndDelete(id);

      if (!task) {
        const err = new Error("This task does not exist.");
        Object.assign(err, { status: 404 });
        throw err;
      }
    } catch (err) {
      Object.assign(err, { status: err.status || 500 });
      throw err;
    }
  }
}

export default TaskRepository;
