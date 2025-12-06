import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { InitialTaskState } from './InitialTaskState';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialStateValue = {
  state: InitialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialStateValue);
