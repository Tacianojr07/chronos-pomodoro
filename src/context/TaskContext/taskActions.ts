import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESERT_STATE = 'RESERT_STATE',
}

export type TaskActionWithPayLoad =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
      payload: TaskModel;
    };

export type TaskActionWithOutPayLoad = {
  type: TaskActionTypes.RESERT_STATE;
};

export type TaskActionModel = TaskActionWithPayLoad | TaskActionWithOutPayLoad;
