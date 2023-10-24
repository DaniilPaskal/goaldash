import { useState } from 'react';
import TaskEditor from './TaskEditor';
import '../styles/TaskManagementPage.css';

const TaskPanel = ({ task, taskList }) => {
    const [showTaskEditor, setShowTaskEditor] = useState(false);
    const { name } = task;

    return (
        <div className='task-panel'>
            <h2>{name}</h2>

            <button onClick={() => setShowTaskEditor(true)}>Edit task</button>
            <TaskEditor show={showTaskEditor} setShow={setShowTaskEditor} taskList={taskList} task={task} />
        </div>
    );
}

export default TaskPanel;