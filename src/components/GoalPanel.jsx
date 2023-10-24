import { useState } from "react";
import GoalEditor from "./GoalEditor";
import TaskListEditor from "./TaskListEditor";
import TaskListPanel from "./TaskListPanel";
import ProgressBar from "./ProgressBar";
import '../styles/TaskManagementPage.css';

const GoalPanel = ({ goal }) => {
    const [showGoalEditor, setShowGoalEditor] = useState(false);
    const [showTaskListEditor, setShowTaskListEditor] = useState(false);
    const { name, progress, taskLists } = goal;

    return (
        <div className='goal-panel'>
            <h2>{name}</h2>
            <h2>{progress}% done</h2>
            <ProgressBar progress={progress} />

            <button onClick={() => setShowGoalEditor(true)}>Edit goal</button>
            <GoalEditor show={showGoalEditor} setShow={setShowGoalEditor} goal={goal} />

            <button onClick={() => setShowTaskListEditor(true)}>Add task list</button>
            <TaskListEditor show={showTaskListEditor} setShow={setShowTaskListEditor} goal={goal} />

            {taskLists.map((taskList) => {
                return(
                    <TaskListPanel taskList={taskList} goal={goal} />
                )
            })}
        </div>
    );
}

export default GoalPanel;