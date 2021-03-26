import { Task } from '@/domain/models/task/Task';

export abstract class ITaskRepository {
  abstract create(task: Task): Promise<Task>;
}
