import { UserModel } from "../../models/user";

export class UserDataServiceProvider {
    public async createUserProfile(data: any) {
        return await UserModel.create(data);
    }

    public async updateUserProfile(userId: String, data: any) {
        return await UserModel.updateOne({ _id: userId }, { $set: data })
    }

    async getExistAccount(email:String) {
        return await UserModel.findOne({ email, status: "ACTIVE" });
    }


    async userById(userId:String, includePassword = false) {
        let project: any = {}
        if (!includePassword) {
            project.password = 0
        }
        return UserModel.findById(userId, project)
    }

    async getUserByEmail(email:String) {
        return UserModel.findOne({ email: email })
    }

}