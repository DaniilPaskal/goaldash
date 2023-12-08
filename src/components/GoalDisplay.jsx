import TaskListDisplay from "./TaskListDisplay";
import '../styles/Dashboard.css';

const GoalDisplay = ({ goal }) => {
    const { name, taskLists } = goal;
    
    return (
        <div>
            <h2>{name}</h2>
            {taskLists.map((taskList) => {
                return (
                    <TaskListDisplay taskList={taskList} key={taskList} />
                );
            })}
        </div>
    );
}

export default GoalDisplay;