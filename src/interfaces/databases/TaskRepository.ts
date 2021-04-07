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
    const result = await this.connection.execute(
      'INSERT INTO tasks (id, title, task_status, created_at, updated_at) VALUES (?, ?, ?, ?, ?)',
      [task.id, task.title, task.taskStatus, task.createdAt, task.updatedAt]
    );

    return task;
  }
}
