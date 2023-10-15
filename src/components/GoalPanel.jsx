import ProgressBar from "./ProgressBar";
import './App.css';

const GoalPanel = ({ goal }) => {
    const { name, progress, taskQueues } = goal;

    return (
        <div className='goal-panel'>
            <h1>{name}</h1>
            <h2>{progress}% done</h2>
            <ProgressBar progress={progress} />

            {taskQueues.map((taskQueue) => {

            })}
        </div>
    );
}

export default GoalPanel;