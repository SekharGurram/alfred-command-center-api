import { CommunicationModel } from "../../models/communication";

export class CommunicationServiceProvider {
  async addCommunication(data: any) {
    return await CommunicationModel.create(data);
  }

  async getCommunicationById(id: string) {
    return await CommunicationModel.findById(id);
  }

  async updateCommunicationById(id: string, data: any) {
    return await CommunicationModel.updateOne({ _id:id }, { $set: data });
  }

  async getCommunicationsByProject(projectId: string) {
    return await CommunicationModel.find({ projectId }).sort({ timestamp: -1 });
  }

  async getAllCommunications() {
    return await CommunicationModel.find();
  }

  async deleteCommunication(id: string) {
    return await CommunicationModel.deleteOne({ _id: id });
  }
}
