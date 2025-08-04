import { ProjectModel } from "../../models/projects";

export class ProjectDataServiceProvider {
  async createProject(data: any) {
    return await ProjectModel.create(data);
  }

  async updateProject(projectId: string, data: any) {
    return await ProjectModel.updateOne({ _id: projectId }, { $set: data });
  }

  async getProjectById(projectId: string) {
    return await ProjectModel.findById(projectId);
  }

  async getProjects() {
    return await ProjectModel.find();
  }

  async deleteProject(projectId: string) {
    return await ProjectModel.deleteOne({ _id: projectId });
  }
}