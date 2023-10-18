import { useState } from 'react';
import { useGoals } from '../contexts/GoalsContext';
import GoalEditor from '../components/GoalEditor';
import GoalPanel from '../components/GoalPanel';

const TaskManagement = () => {
    const [show, setShow] = useState(false);
    const goals = useGoals();

    return (
        <div>
            <button onClick={() => setShow(true)}>Create goal</button>
            <GoalEditor show={show} setShow={setShow} />

            {goals.map((goal) => {
                return (
                    <GoalPanel goal={goal} />
                );
            })}
        </div>
    );
}

export default TaskManagement;