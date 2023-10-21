import { useState } from "react";
import { Modal } from "bootstrap";
import { useGoals } from "../contexts/GoalsContext";
import { saveGoal } from "./DataFunctions";

const emptyGoal = {
    name: '',
    endDate: ''
};

const GoalEditor = ({ show, setShow, goal = emptyGoal }) => {
    const goals = useGoals();
    const [newGoal, setNewGoal] = useState(goal);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewGoal({ ...newGoal, [name]: value });
    }

    const handleSave = () => {
        saveGoal(goals, newGoal);
    }

    const handleDelete = () => {

    }

    return (
        <div>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' defaultValue={newGoal.name} onChange={handleChange} required />

            <label for='endDate'>End date:</label>
            <input type='date' id='endDate' name='endDate' defaultValue={newGoal.endDate} onChange={handleChange} required />

            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default GoalEditor;