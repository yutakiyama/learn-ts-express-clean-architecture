import Express from 'express';

export const router = Express.Router();

type Task = {
  id: number;
  title: string;
}

const tasks: Task[] = [
  {id: 1, title: 'タスク1'},
  {id: 2, title: 'タスク2'},
  {id: 3, title: 'タスク3'},
]

router.get('/tasks',  ((req, res) => (
  res.send(JSON.stringify(tasks))
)))
