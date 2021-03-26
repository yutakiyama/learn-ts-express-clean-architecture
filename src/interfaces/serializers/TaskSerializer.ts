import { Task } from '@/domain/models/task/Task';

const serializeTask = (task: Task) => {
  return {
    id: task.id,
    title: task.title,
    taskStatus: task.taskStatus,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
};

export class TaskSerializer {
  serialize(data: Task | undefined) {
    if (!data) {
      throw new Error('データがありません');
    }

    if (Array.isArray(data)) {
      return data.map(serializeTask);
    }

    return serializeTask(data);
  }
}
