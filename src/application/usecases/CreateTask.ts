import { ITaskRepository } from '@/application/repositories/ITaskRepository';
import { Task } from '@/domain/models/task/Task';

export class CreateTask {
  private taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(title: string) {
    const task = new Task(title);
    return this.taskRepository.create(task);
  }
}
