import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useGoals } from "../contexts/GoalsContext";
import { saveGoal, deleteGoal } from "./DataFunctions";
import '../styles/Editors.css';

const emptyGoal = {
    id: -1,
    name: null,
    endDate: null
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
        if (!endDate || endDate <= new Date().getDate()) {
            alert('Please select a date in the future.');
            return;
        }

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
                <form name='goalForm' onSubmit={handleSave}>
                    <label for='name'>Name:</label>
                    <input type='text' id='name' name='name' defaultValue={name} onChange={handleChange} required />

                    <label for='endDate'>End date:</label>
                    <input type='date' id='endDate' name='endDate' defaultValue={endDate} onChange={handleChange} required />

                    <input type='submit' value='Save' />
                    <button onClick={handleDelete}>Delete</button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default GoalEditor;