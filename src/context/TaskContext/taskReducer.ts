import type { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionTypes, type TaskActionsModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionsModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.RESERT_STATE: {
      return state;
    }
  }

  return state;
}
