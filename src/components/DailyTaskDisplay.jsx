import { useState } from 'react';
import { completeDailyTask } from './DataFunctions';
import TaskEditor from './TaskEditor';
import ProgressIndicator from './ProgressIndicator';
import '../styles/Dashboard.css';

const DailyTaskDisplay = ({ dailyTask }) => {
    const [showTaskEditor, setShowTaskEditor] = useState(false);
    const { name, duration, status, task } = dailyTask;
    const { taskList } = task;

    const handleDone = () => {
        completeDailyTask(dailyTask);
        status = 'ahead';
    }

    const handlePostpone = () => {
        status = 'behind';
    }

    return (
        <div className='daily-task-display'>
            <h3>{name}</h3>
            <p>{duration}</p>
            <div>
                <ProgressIndicator status={status} />
                <button onClick={handleDone}>Done</button>
                <button onClick={handlePostpone}>Postpone</button>
                <button onClick={() => setShowTaskEditor(true)}>Edit</button>

                <TaskEditor show={showTaskEditor} setShow={setShowTaskEditor} taskList={taskList} task={task} />
            </div>
        </div>
    );
}

export default DailyTaskDisplay;