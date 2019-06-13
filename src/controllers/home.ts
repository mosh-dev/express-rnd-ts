import {Request, Response} from 'express';

const FILES_DIR = './files';

/* GET home page. */
const index = (req: Request, res: Response) => {
  res.send('Hello World!');
};

export const HOME_CONTROLLER = {
  index
};
