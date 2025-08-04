import { Router } from 'express';
import { UserController } from '../controllers/userContoller';

const userController = new UserController();


const router: Router = Router();

router.post(
  '/create-user',
  userController.createUser.bind(userController)
);

export default router;
