import {Router} from 'express';
import {HOME_CONTROLLER} from '../controllers/home.controller';

const router = Router();

router
  .get('/', HOME_CONTROLLER.index);

export const DEFAULT_ROUTES = router;
