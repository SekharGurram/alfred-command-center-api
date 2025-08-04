import { Request, Response, NextFunction } from 'express'
import { ActionServiceProvider } from '../services/database/actionServiceProvider';

const actionServiceProvider=new ActionServiceProvider();

export class ActionController {
    public async getProjectActions(req: Request, res: Response, next: NextFunction) {
        try {
            const projectId=req.params.projectId;
            const communications = await actionServiceProvider.getActionsByProject(projectId);
            return res.status(200).json({
                success: true,
                message: "actions fetched successfully",
                data:communications
            });
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
            next(err);
        }
    }
}
