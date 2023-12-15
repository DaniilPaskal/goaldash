import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGoals } from '../contexts/GoalsContext';
import GoalEditor from '../components/GoalEditor';
import GoalPanel from '../components/GoalPanel';
import '../styles/TaskManagementPage.css';

const TaskManagement = () => {
    const [show, setShow] = useState(false);
    const goals = useGoals();

    return (
        <div className='task-management-page'>
            <div className='nav'>
                <Link to='/dashboard'>Dashboard</Link>
            </div>
            
            <button onClick={() => setShow(true)}>Create goal</button>
            <GoalEditor show={show} setShow={setShow} />

            {goals.map((goal) => {
                return (
                    <GoalPanel goal={goal} key={goal} />
                );
            })}
        </div>
    );
}

export default TaskManagement;