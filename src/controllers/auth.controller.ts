import {Request, Response} from 'express';

function index(req: Request, res: Response) {
  res.json('Singing in');
}
function logout(req: Request, res: Response) {
  res.json('Singing out');
}

export const AUTH_CONTROLLER = {
  index,
  logout
};
