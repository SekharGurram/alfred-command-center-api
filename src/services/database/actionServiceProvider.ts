import { ActionModel } from "../../models/action";

export class ActionServiceProvider {
  async createAction(data: any) {
    return await ActionModel.create(data);
  }

  async getActionsByProject(projectId: string) {
    return await ActionModel.find({ projectId });
  }

  async updateAction(actionId: string, data: any) {
    return await ActionModel.updateOne({ _id: actionId }, { $set: data });
  }

  async deleteAction(actionId: string) {
    return await ActionModel.deleteOne({ _id: actionId });
  }
}
