import { useState } from "react";
import TaskListEditor from "./TaskListEditor";
import TaskEditor from "./TaskEditor";
import TaskPanel from "./TaskPanel";
import ProgressBar from "./ProgressBar";
import '../App.css';

const TaskListPanel = ({ taskList, goal }) => {
    const [showTaskListEditor, setShowTaskListEditor] = useState(false);
    const [showTaskEditor, setShowTaskEditor] = useState(false);
    const { name, head } = taskList;
    const taskArray = [];
    var taskNode = head;

    while (taskNode) {
        taskArray.push(taskNode);
        taskNode = taskNode.next;
    }

    return (
        <div className='tasklist-panel'>
            <h1>{name}</h1>

            <button onClick={() => setShowTaskListEditor(true)}>Edit task list</button>
            <TaskListEditor show={showTaskListEditor} setShow={setShowTaskListEditor} goal={goal} taskList={taskList} />

            <button onClick={() => setShowTaskEditor(true)}>Add task</button>
            <TaskEditor show={showTaskEditor} setShow={setShowTaskEditor} taskList={taskList} />

            {taskArray.map((task) => {
                return(
                    <TaskPanel task={task} taskList={taskList} />
                )
            })}
            
        </div>
    );
}

export default TaskListPanel;