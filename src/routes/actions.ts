import { Router } from 'express';
import { ActionController } from '../controllers/actionController';
const actionController = new ActionController();


const router: Router = Router();

router.get(
  '/actions/:projectId',
  actionController.getProjectActions.bind(actionController)
);

export default router;
