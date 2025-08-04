import { Request, Response, NextFunction } from 'express'
import { CommunicationServiceProvider } from '../services/database/communicationServiceProvider';

const communicationServiceProvider = new CommunicationServiceProvider();

export class CommunicationController {
    public async getProjectCommunications(req: Request, res: Response, next: NextFunction) {
        try {
            const projectId = req.params.projectId;
            const communications = await communicationServiceProvider.getCommunicationsByProject(projectId);
            return res.status(200).json({
                success: true,
                message: "communications fetched successfully",
                data: communications
            });
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
            next(err);
        }
    }

    public async updateProjectCommunications(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const body = req.body;
            const communication = await communicationServiceProvider.getCommunicationById(id);
            if (!communication) {
                return res.status(400).json({
                    success: false,
                    msg: "Project not found"
                });
            }
            let updateData: any = {};
            if (body.operation === "FlagRisk") {
                if (body.data.status === "Normal") {
                    updateData.status = "High";      //if it is notmal change to high
                    updateData.type = body.operation;
                }
                else if (body.data.status === "High") {
                    updateData.status = "Critical"; //if it is high change to critical
                    updateData.type = body.operation;
                }
                //if it is critical dont do anything as it is already in critical state
            } else if (body.operation === "Insight") {
                updateData.note = body.data.note;
                updateData.type = body.operation;
            } else {
                //update
                updateData.title = body.data.title;
                updateData.message = body.data.description;
                updateData.type = body.operation;
            }
            const updateRes= await communicationServiceProvider.updateCommunicationById(id,updateData);
            return res.status(200).json({
                success: true,
                message: "communication updated successfully",
                data:updateRes
            });
        } catch (err: any) {
            res.status(400).json({ error: (err as Error).message });
            next(err);
        }
    }
}
