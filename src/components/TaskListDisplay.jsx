import { getDailyTasks } from "./DataFunctions";

const TaskListDisplay = ({ taskList }) => {
    const { name } = taskList;
    const dailyTasks = getDailyTasks(taskList);
    
    return (
        <div>
            <h3>{name}</h3>
            {dailyTasks.map(() => {
                
            })}
        </div>
    );
}

export default TaskListDisplay;