import { IProjectDTO } from "../infra/schema/Projects";
import ProjectRepository, {
  IProjectResponse,
} from "../repositories/ProjectRepositories";

class ProjectService {
  private projectRepository: ProjectRepository;

  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  public async createProject(data: IProjectDTO): Promise<IProjectResponse> {
    if (!(data.name && data.ownerId)) {
      const err = new Error("Name and ownerId are required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    const newProject = await this.projectRepository.createProject(data);
    return newProject;
  }

  public async updateProject(
    id: string,
    name: string
  ): Promise<IProjectResponse | null> {
    if (!(name && id)) {
      const err = new Error("Name and id are required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    const updatedProject = await this.projectRepository.updateById(id, name);
    return updatedProject;
  }

  public async findProjects(
    ownerId: string
  ): Promise<IProjectResponse[] | null> {
    if (!ownerId) {
      const err = new Error("OwnerId is required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    const projects = await this.projectRepository.listProjectsByOwner(ownerId);
    return projects;
  }

  public async deleteProject(id: string): Promise<void> {
    if (!id) {
      const err = new Error("Id is required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    await this.projectRepository.deleteProject(id);
  }
}

export default ProjectService;
