import express from 'express';
import {json, urlencoded} from 'body-parser';
import {configure} from './config';
import {AUTH_ROUTES} from './routes/auth-routes';
import {DEFAULT_ROUTES} from './routes';

configure().then();

const app = express();
app
  .use(json())
  .use(urlencoded({extended: true}))


  /**
   * ROUTES
   */
  .use(DEFAULT_ROUTES)
  .use('/auth', AUTH_ROUTES)
  .listen(3000, () => console.log('Application listening On Port 3000'));

