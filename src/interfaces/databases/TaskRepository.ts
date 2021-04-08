import { ITaskRepository } from '@/application/repositories/ITaskRepository';
import { Task } from '@/domain/models/task/Task';
import { IDBConnection } from '@/interfaces/databases/IDBConnection';

export class TaskRepository extends ITaskRepository {
  private connection: any;

  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  async create(task: Task): Promise<Task> {
    const queryResult = await this.connection.execute(
      'INSERT INTO tasks (id, title, task_status, created_at, updated_at) VALUES (?, ?, ?, ?, ?)',
      [task.id, task.title, task.taskStatus, task.createdAt, task.updatedAt]
    );

    return task;
  }

  async findAll(): Promise<Task[]> {
    const queryResult = await this.connection.execute('SELECT * FROM tasks');

    const tasks = queryResult.map((t: any) => {
      const task = new Task(t.title);
      task.id = t.id;
      task.createdAt = t.created_at;
      task.updatedAt = t.updated_at;
      return task;
    });

    return tasks;
  }
}
