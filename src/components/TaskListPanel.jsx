import { useState } from "react";
import TaskListEditor from "./TaskListEditor";
import TaskEditor from "./TaskEditor";
import ProgressBar from "./ProgressBar";
import '../App.css';

const TaskListPanel = ({ TaskList }) => {
    const [showTaskListEditor, setShowTaskListEditor] = useState(false);
    const [showTaskEditor, setShowTaskEditor] = useState(false);
    const { name, head } = TaskList;


    return (
        <div className='tasklist-panel'>
            <h1>{name}</h1>

            <button onClick={() => setShowTaskListEditor(true)}>Edit TaskList</button>
            <TaskListEditor show={showTaskListEditor} setShow={setShowTaskListEditor} taskList={TaskList} />

            <button onClick={() => setShowTaskEditor(true)}>Add task</button>
            <TaskEditor show={showTaskEditor} setShow={setShowTaskEditor} />

            
        </div>
    );
}

export default TaskListPanel;