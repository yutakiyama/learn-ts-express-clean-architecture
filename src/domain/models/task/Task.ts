import { TaskStatus } from './TaskStatus';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

export class Task {
  private _id: string;
  private _title: string;
  private _taskStatus: TaskStatus;
  private _createdAt: string;
  private _updatedAt: string;

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

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  constructor(title: string) {
    this._id = uuidv4();
    this._title = title;
    this._taskStatus = 'NOT_STARTED';
    this._createdAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    this._updatedAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }
}
