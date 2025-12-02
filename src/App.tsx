import { useState } from 'react';
import { TaskContextProvider } from './context/TaskContext';
import { Home } from './pages/Home';
import './Styles/global.css';
import './Styles/therme.css';
import type { TaskStateModel } from './models/TaskStateModel';

const InitialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(InitialState);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
