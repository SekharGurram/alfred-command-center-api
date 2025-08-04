import { Request, Response, NextFunction } from 'express'
import { ProjectTaskServiceProvider } from '../services/database/projectTaskServiceProvider';
import { ProjectDataServiceProvider } from '../services/database/projectDataServiceProvider';

const projectTaskServiceProvider = new ProjectTaskServiceProvider();
const projectDataServiceProvider = new ProjectDataServiceProvider();

export class ProjectTaskController {
    public async getProjectTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const projectId = req.params.projectId;
            const project = await projectDataServiceProvider.getProjectById(projectId);
            if (!project) {
                return res.status(400).json({
                    success: false,
                    msg: "Project not found"
                });
            }
            const tasks = await projectTaskServiceProvider.getTasksByProject(projectId);
            let response = {
                projectName: project.name,
                spi: project.spi,
                completion: project.progress,
                tasks: tasks
            }
            return res.status(200).json({
                success: true,
                message: "tasks fetched successfully",
                data: response
            });
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
            next(err);
        }
    }
}
