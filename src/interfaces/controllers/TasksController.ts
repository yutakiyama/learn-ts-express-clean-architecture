import { IDBConnection } from '@/interfaces/databases/IDBConnection';
import { TaskSerializer } from '@/interfaces/serializers/TaskSerializer';
import { TaskRepository } from '@/interfaces/databases/TaskRepository';
import { CreateTask } from '@/application/usecases/CreateTask';

export class TasksController {
  private taskSerializer: TaskSerializer;
  private taskRepository: TaskRepository;

  constructor(dbConnection: IDBConnection) {
    this.taskSerializer = new TaskSerializer();
    this.taskRepository = new TaskRepository(dbConnection);
  }

  async createTask(request: any): Promise<any> {
    const { title } = request.body;

    const useCase = new CreateTask(this.taskRepository);
    const result = await useCase.execute(title as string);

    return this.taskSerializer.serialize(result);
  }
}
