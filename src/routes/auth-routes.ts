import {Router} from 'express';
import {AUTH_CONTROLLER} from '../controllers/auth.controller';

const router = Router();

router
  .get('/login', AUTH_CONTROLLER.index)
  .get('/logout', AUTH_CONTROLLER.logout);

export const AUTH_ROUTES = router;
