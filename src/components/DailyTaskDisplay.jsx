import { useState } from 'react';
import TaskIndicator from './TaskIndicator';

const DailyTaskDisplay = ({ dailyTask }) => {
    const [showTaskEditor, setShowTaskEditor] = useState(false);
    const { name, duration, status } = dailyTask;

    const handleDone = () => {

    }

    const handlePostone = () => {

    }

    

    return (
        <div>
            <h3>{name}</h3>
            <p>{duration}</p>
            <div>
                <TaskIndicator status={status} />
                <button>Done</button>
                <button>Postpone</button>
                <button onClick={() => setShowTaskEditor(true)}>Edit</button>

                <TaskEditor show={showTaskEditor} setShow={setShowTaskEditor} taskList={taskList} task={task} />
            </div>
        </div>
    );
}

export default DailyTaskDisplay;