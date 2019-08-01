import express from 'express';
import {json, urlencoded} from 'body-parser';
import {HOME_CONTROLLER} from './controllers/home';
import {configure} from './config';

configure().then(() => {
});

const app = express();
app
  .use(json())
  .use(urlencoded({extended: true}));


app.get('/', HOME_CONTROLLER.index)
  .listen(3000, () => {
    console.log('Application listening On Port 3000');
  });

