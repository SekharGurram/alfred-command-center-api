import { NextFunction, Request, Response, Router } from 'express';
import user from './user';
import projectsite from './projectsite';
import projectTask from './projectTask';
import communications from './communications';
import actions from './actions';

const router: Router = Router();

router.use(user)
router.use(projectsite)
router.use(projectTask)
router.use(communications)
router.use(actions)

export default router;