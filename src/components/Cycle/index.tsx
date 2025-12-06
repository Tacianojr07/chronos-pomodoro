import { useTaskContext } from '../../context/TaskContext/useTasksContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycle() {
  const { state } = useTaskContext();

  const cicleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
    workTime: 'foco',
  };

  return (
    <div className={styles.cycles}>
      <div className={styles.cycleDots}>
        {cicleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`indicador de ciclo ${cycleDescriptionMap[nextCycleType]}`}
              title={`indicador de ciclo ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
      <div className={styles.cycleDots}></div>
    </div>
  );
}
