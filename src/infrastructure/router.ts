import Express from 'express';
import { TasksController } from '@/interfaces/controllers/TasksController';
import { MysqlConnection } from '@/infrastructure/MysqlConnection';

export const router = Express.Router();

const mysqlConnection = new MysqlConnection();
const tasksController = new TasksController(mysqlConnection);

// router.get('/tasks', (req, res) => res.send(JSON.stringify(tasks)));

router.post('/tasks', async (req, res) => {
  const result = await tasksController.createTask(req);
  res.send(result);
});
