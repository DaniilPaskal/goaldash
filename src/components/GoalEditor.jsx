import { useState } from "react";
import { Modal } from "bootstrap";
import { saveGoal } from "./DataFunctions";

const emptyGoal = {
    name: '',
    endDate: ''
};

const GoalEditor = ({ show, setShow, goal = emptyGoal }) => {
    const [newGoal, setNewGoal] = useState(goal);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewGoal({ ...newGoal, [name]: value });
    }

    const handleSave = () => {
        saveGoal(newGoal);
    }

    const handleDelete = () => {

    }

    return (
        <Modal show={show} onHide={() => setShow(false)} size='lg'>
            <Modal.Header closeButton />
            <Modal.Body>
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' defaultValue={newGoal.name} onChange={handleChange} required />

                <label for='endDate'>End date:</label>
                <input type='date' id='endDate' name='endDate' defaultValue={newGoal.endDate} onChange={handleChange} required />

                <button onClick={handleSave}></button>
            </Modal.Body>
        </Modal>
    );
}

export default GoalEditor;