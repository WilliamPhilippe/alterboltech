import Project, { IProjectDTO } from "../infra/schema/Projects";

export interface IProjectResponse {
  id?: string;
  name?: string;
}

class ProjectRepository {
  public async createProject(data: IProjectDTO): Promise<IProjectResponse> {
    try {
      const newProject = await Project.create(data);
      return { id: newProject.id, name: newProject.name };
    } catch (err) {
      Object.assign(err, { status: 500 });
      throw err;
    }
  }

  public async updateById(
    id: string,
    name: string
  ): Promise<IProjectResponse | null> {
    try {
      const updatedProject = await Project.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );

      if (!updatedProject) {
        const err = new Error("This project does not exist.");
        Object.assign(err, { status: 404 });
        throw err;
      }

      return { id: updatedProject?.id, name: updatedProject?.name };
    } catch (err) {
      Object.assign(err, { status: err.status || 500 });
      throw err;
    }
  }

  public async listProjectsByOwner(
    ownerId: string
  ): Promise<IProjectResponse[]> {
    try {
      const projects = await Project.find(
        { ownerId },
        { id: "$_id", _id: 0, name: 1 }
      );
      return projects;
    } catch (err) {
      Object.assign(err, { status: err.status || 500 });
      throw err;
    }
  }

  public async deleteProject(id: string): Promise<void> {
    try {
      await Project.findByIdAndDelete(id);
    } catch (err) {
      Object.assign(err, { status: err.status || 500 });
      throw err;
    }
  }
}

export default ProjectRepository;
