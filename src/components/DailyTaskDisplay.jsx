import { useState } from 'react';
import { completeDailyTask } from './DataFunctions';
import TaskEditor from './TaskEditor';
import TaskIndicator from './TaskIndicator';

const DailyTaskDisplay = ({ dailyTask }) => {
    const [showTaskEditor, setShowTaskEditor] = useState(false);
    const { name, duration, status, task } = dailyTask;

    const handleDone = () => {
        completeDailyTask(dailyTask);
        status = 'ahead';
    }

    const handlePostpone = () => {
        status = 'behind';
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>{duration}</p>
            <div>
                <TaskIndicator status={status} />
                <button onClick={handleDone}>Done</button>
                <button onClick={handlePostpone}>Postpone</button>
                <button onClick={() => setShowTaskEditor(true)}>Edit</button>

                <TaskEditor show={showTaskEditor} setShow={setShowTaskEditor} taskList={taskList} task={task} />
            </div>
        </div>
    );
}

export default DailyTaskDisplay;