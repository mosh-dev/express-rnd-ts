import {Request, Response} from 'express';
import User from '../models/user';
import {usersList} from '../values/dummyData';
import {appendFileSync, existsSync, mkdirSync, readFileSync} from 'fs';

const FILES_DIR = './files';

/* GET home page. */
const index = (req: Request, res: Response) => {
  if (!existsSync(FILES_DIR)) {
    mkdirSync(FILES_DIR);
  }
  appendFileSync('./files/name.txt', 'Holl molly');
  res.json(readFileSync('./files/name.txt').toString('utf8'));
};
const users = (req: Request, res: Response) => res.json(usersList);

const create = (req: Request, res: Response) => {
  const user = new User(req.body.name, req.body.username, req.body.email);
  res.json(user);
};

export const HOME_CONTROLLER = {
  index,
  users,
  create
};
