import {Router} from 'express';
import {HOME_CONTROLLER} from '../controllers/home.controller';

export const DEFAULT_ROUTES = Router();

DEFAULT_ROUTES
  .get('/', HOME_CONTROLLER.index);
