import { ProjectModel } from "../../models/projects";
import { ProjectTaskModel } from "../../models/projectTask";
import mongoose from "mongoose";

export class ProjectTaskServiceProvider {
  async createTask(data: any) {
    return await ProjectTaskModel.create(data);
  }

  async updateTask(taskId: string, data: any) {
    return await ProjectTaskModel.updateOne({ _id: taskId }, { $set: data });
  }
  // async getTasksByProject(projectId: string) {
  //   return await ProjectTaskModel.find({ projectId })
  //   .populate('projectId', 'name location capacity progress')  // Populate fields from Project model
  //   .exec();;
  // }

  async getTasksByProject(projectId: string) {
    try {
      const tasks = await ProjectTaskModel.aggregate([
        { $match: { projectId: new mongoose.Types.ObjectId(projectId) } },
        {
          $group: {
            _id: '$stage',//Grouping by the 'stage' field
            tasks: {
              $push: {
                _id: "$_id",
                name: "$name",
                status: "$status",
                completion: "$completion",
                note: "$note",
                dueDate: "$dueDate",
                createdAt: "$created_at",
                updatedAt: "$updated_at",
              }
            },
          }
        },
        {
          $sort: { '_id': 1 }
        }
      ]);
      return tasks;
    } catch (error) {
      console.error('Error fetching tasks by stage:', error);
      throw new Error('Could not fetch tasks');
    }
  }


  async getTaskById(taskId: string) {
    return await ProjectTaskModel.findById(taskId);
  }

  async deleteTask(taskId: string) {
    return await ProjectTaskModel.deleteOne({ _id: taskId });
  }
}
