import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useGoals } from "../contexts/GoalsContext";
import { saveGoal, deleteGoal } from "./DataFunctions";
import '../styles/Editors.css';

const emptyGoal = {
    id: -1,
    name: '',
    endDate: ''
};

const GoalEditor = ({ show, setShow, goal = emptyGoal }) => {
    const goals = useGoals();
    const [newGoal, setNewGoal] = useState(goal);
    const { name, endDate } = newGoal;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewGoal({ ...newGoal, [name]: value });
    }

    const handleSave = () => {
        saveGoal(goals, goal, newGoal);
        setNewGoal(emptyGoal);
        setShow(false);
    }

    const handleDelete = () => {
        deleteGoal(goals, goal);
        setNewGoal(emptyGoal);
        setShow(false);
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit goal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' defaultValue={name} onChange={handleChange} required />

                <label for='endDate'>End date:</label>
                <input type='date' id='endDate' name='endDate' defaultValue={endDate} onChange={handleChange} required />

                <button onClick={handleSave}>Save</button>
                <button onClick={handleDelete}>Delete</button>
            </Modal.Body>
        </Modal>
    );
}

export default GoalEditor;