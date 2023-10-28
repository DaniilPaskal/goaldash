import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGoals } from "../contexts/GoalsContext";
import GoalDisplay from "../components/GoalDisplay";
import './App.css';

const Dashboard = () => {
    const goals = useGoals();

    return (
        <>
            <div className='nav-container'>
                <FontAwesomeIcon icon='fa-solid fa-user' />
                <FontAwesomeIcon icon='fa-solid fa-bars' />
            </div>
            <Link to='task-management'>
                <FontAwesomeIcon icon='fa-solid fa-pencil' />
            </Link>

            {goals.map((goal) => {
                return (
                    <GoalDisplay goal={goal} />
                );
            })}
        </>
    );
}

export default Dashboard;