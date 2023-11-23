import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Task } from './Classes';
import Checkbox from './Checkbox';
import { saveTask, deleteTask } from './DataFunctions';
import '../styles/Editors.css';

const emptyTask = {
    name: '',
    duration: 0,
    locked: false
}

const TaskEditor = ({ show, setShow, taskList, task = emptyTask }) => {
    const [newTask, setNewTask] = useState(task);
    const { name, duration, locked } = newTask;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewTask({ ...newTask, [name]: value });
    }

    const handleSave = () => {
        if (name.length === 0) {
            alert('Please name your goal.');
            return;
        }

        if (duration === 0) {
            alert('Please set a duration.');
            return;
        }

        saveTask(taskList, task, newTask);
        setNewTask(emptyTask);
        setShow(false);
    }

    const handleDelete = () => {
        deleteTask(task);
        setNewTask(emptyTask);
        setShow(false);
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' defaultValue={name} onChange={handleChange} required />

                <label for='duration'>Duration:</label>
                <input type='text' id='duration' name='duration' defaultValue={duration} onChange={handleChange} required />

                <label for='locked'>Locked:</label>
                <Checkbox name='locked' checked={locked} handleChange={handleChange} />

                <button onClick={handleSave}>Save</button>
                <button onClick={handleDelete}>Delete</button>
            </Modal.Body>
        </Modal>
    );
}

export default TaskEditor;