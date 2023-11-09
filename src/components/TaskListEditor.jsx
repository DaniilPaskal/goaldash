import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { saveTaskList, deleteTaskList } from "./DataFunctions";
import '../styles/Editors.css';

const emptyTaskList = {
    name: '',
};

const TaskListEditor = ({ show, setShow, goal, taskList = emptyTaskList }) => {
    const [newTaskList, setNewTaskList] = useState(taskList);
    const { name } = newTaskList;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewTaskList({ ...newTaskList, [name]: value });
    }

    const handleSave = () => {
        saveTaskList(goal, taskList, newTaskList);
        setNewTaskList(emptyTaskList);
        setShow(false);
    }

    const handleDelete = () => {
        deleteTaskList(goal, taskList);
        setNewTaskList(emptyTaskList);
        setShow(false);
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit task list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' defaultValue={name} onChange={handleChange} required />

                <button onClick={handleSave}>Save</button>
            </Modal.Body>
        </Modal>
    );
}

export default TaskListEditor;