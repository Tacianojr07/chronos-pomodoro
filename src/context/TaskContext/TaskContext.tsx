import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { InitialTaskState } from './InitialTaskState';
import type { TaskActionModel } from './taskActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialStateValue = {
  state: InitialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialStateValue);
