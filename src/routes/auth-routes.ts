import {Router} from 'express';
import {AUTH_CONTROLLER} from '../controllers/auth.controller';

export const AUTH_ROUTES = Router();

AUTH_ROUTES
  .get('/login', AUTH_CONTROLLER.index)
  .get('/logout', AUTH_CONTROLLER.logout);
