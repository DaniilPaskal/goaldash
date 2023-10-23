import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { saveTaskList } from "./DataFunctions";

const emptyTaskList = {
    name: '',
};

const TaskListEditor = ({ show, setShow, goal, taskList = emptyTaskList }) => {
    const [newTaskList, setNewTaskList] = useState(taskList);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewTaskList({ ...newTaskList, [name]: value });
    }

    const handleSave = () => {
        saveTaskList(goal, taskList, newTaskList);
        setShow(false);
    }

    const handleDelete = () => {

    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit task list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' defaultValue={newTaskList.name} onChange={handleChange} required />

                <button onClick={handleSave}>Save</button>
            </Modal.Body>
        </Modal>
    );
}

export default TaskListEditor;