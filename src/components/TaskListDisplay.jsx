import { getDailyTasks } from "./DataFunctions";
import DailyTaskDisplay from "./DailyTaskDisplay";

const TaskListDisplay = ({ taskList }) => {
    const { name } = taskList;
    const dailyTasks = getDailyTasks(taskList);
    
    return (
        <div>
            <h3>{name}</h3>
            {dailyTasks.map((dailyTask) => {
                <DailyTaskDisplay dailyTask={dailyTask} />
            })}
        </div>
    );
}

export default TaskListDisplay;