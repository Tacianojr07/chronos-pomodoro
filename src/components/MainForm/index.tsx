import { PlayCircleIcon } from 'lucide-react';
import { Cycle } from '../Cycle';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useEffect, useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../context/TaskContext/useTasksContext';
import { getNextCycle } from '../../utils/getNextCycle';

export function MainForm() {
  const { setState, state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const taskNameInput = useRef<HTMLInputElement | null>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim() ?? '';

    if (!taskName) {
      alert('digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks],
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycle />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
