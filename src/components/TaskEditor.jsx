import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Task } from './Classes';
import Checkbox from './Checkbox';
import { saveTask } from './DataFunctions';

const emptyTask = {
    name: '',
    duration: 0,
    locked: false
}

const TaskEditor = ({ show, setShow, taskList, task = emptyTask }) => {
    const [newTask, setNewTask] = useState(task);
    const {} = newTask;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewTask({ ...newTask, [name]: value });
    }

    const handleSave = () => {
        saveTask(taskList, task, newTask);
        setShow(false);
    }

    const handleDelete = () => {

    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' onChange={handleChange} required />

                <label for='duration'>Duration:</label>
                <input type='text' id='duration' name='duration' onChange={handleChange} required />

                <label for='locked'>Locked:</label>
                <Checkbox name='locked' handleChange={handleChange} />

                <button onClick={handleSave}>Save</button>
            </Modal.Body>
        </Modal>
    );
}

export default TaskEditor;