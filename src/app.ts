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
  printMemoryUsage();
});

function printMemoryUsage() {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
}
