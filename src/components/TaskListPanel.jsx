import { useState } from "react";
import TaskListEditor from "./TaskListEditor";
import ProgressBar from "./ProgressBar";
import '../App.css';

const TaskListPanel = ({ TaskList }) => {
    const [showTaskListEditor, setShowTaskListEditor] = useState(false);
    const { name, head } = TaskList;

    return (
        <div className='tasklist-panel'>
            <h1>{name}</h1>

            <button onClick={() => setShowTaskListEditor(true)}>Edit TaskList</button>
            <TaskListEditor show={showTaskListEditor} setShow={setShowTaskListEditor} TaskList={TaskList} />

            

            
        </div>
    );
}

export default TaskListPanel;