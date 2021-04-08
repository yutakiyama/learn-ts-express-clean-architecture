import { ITaskRepository } from '@/application/repositories/ITaskRepository';

export class GetTaskList {
  private taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(title: string) {
    return this.taskRepository.findAll();
  }
}
