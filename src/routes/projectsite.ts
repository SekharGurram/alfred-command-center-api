import { Router } from 'express';
import { ProjectController } from '../controllers/projectController';

const projectController = new ProjectController();


const router: Router = Router();

router.get(
  '/projects',
  projectController.getProjects.bind(projectController)
);

export default router;
