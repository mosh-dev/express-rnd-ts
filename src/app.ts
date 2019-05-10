import express from 'express';
import {json, urlencoded} from 'body-parser';
import {HOME_CONTROLLER} from './controllers/home';

const app = express();
app.use(json());
app.use(urlencoded({extended: true}));
app.get('/', HOME_CONTROLLER.index);
app.get('/users', HOME_CONTROLLER.users);
app.post('/users/create', HOME_CONTROLLER.create);

app.listen(3000, () => {
  console.log('Application listening On Port 3000');
});

