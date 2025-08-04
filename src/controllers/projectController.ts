import { Request, Response, NextFunction } from 'express'
import { ProjectDataServiceProvider } from '../services/database/projectDataServiceProvider';

const projectDataServiceProvider = new ProjectDataServiceProvider();

export class ProjectController {
    public async getProjects(req: Request, res: Response, next: NextFunction) {
        try {
            const projects = await projectDataServiceProvider.getProjects();
            return res.status(200).json({
                success: true,
                message: "Project sites fetched successfully",
                data:projects
            });
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
            next(err);
        }
    }
}
