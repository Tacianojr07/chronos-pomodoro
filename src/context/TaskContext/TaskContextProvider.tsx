import { useReducer, useState } from 'react';
import { InitialTaskState } from './InitialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, InitialTaskState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
