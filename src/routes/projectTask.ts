import { Router } from 'express';
import { ProjectTaskController } from '../controllers/projectTaskController';

const projectTaskController = new ProjectTaskController();


const router: Router = Router();

router.get(
  '/tasks/:projectId',
  projectTaskController.getProjectTasks.bind(projectTaskController)
);

export default router;
