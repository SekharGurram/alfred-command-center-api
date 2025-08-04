import { Router } from 'express';
import { CommunicationController } from '../controllers/communicationController';

const communicationController = new CommunicationController();


const router: Router = Router();

router.get(
  '/communications/:projectId',
  communicationController.getProjectCommunications.bind(communicationController)
);

router.patch(
  '/communications/:id/update',
  communicationController.updateProjectCommunications.bind(communicationController)
);

export default router;
