import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGoals } from "../contexts/GoalsContext";
import GoalPanel from "../components/GoalPanel";
import './App.css';

const Dashboard = () => {
    const goals = useGoals();

    return (
        <>
            <div className='nav-container'>
                <FontAwesomeIcon icon='fa-solid fa-user' />
                <FontAwesomeIcon icon='fa-solid fa-bars' />
            </div>
            <FontAwesomeIcon icon='fa-solid fa-pencil' />

            {goals.map((goal) => {
                return (
                    <GoalPanel goal={goal} />
                );
            })}
        </>
    );
}

export default Dashboard;