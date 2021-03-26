import { TaskStatus } from './TaskStatus';
import { v4 as uuidv4 } from 'uuid';

export class Task {
  private _id: string;
  private _title: string;
  private _taskStatus: TaskStatus;
  private _createdAt: Date;
  private _updatedAt: Date;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get taskStatus(): TaskStatus {
    return this._taskStatus;
  }

  set taskStatus(value: TaskStatus) {
    this._taskStatus = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  constructor(title: string) {
    this._id = uuidv4();
    this._title = title;
    this._taskStatus = TaskStatus.NOT_STARTED;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }
}
