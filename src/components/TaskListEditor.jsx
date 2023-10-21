import { useState } from "react";
import { Modal } from "bootstrap";
import { saveTaskList } from "./DataFunctions";

const emptyTaskList = {
    name: '',
};

const TaskListEditor = ({ show, setShow, goal, TaskList = emptyTaskList }) => {
    const [newTaskList, setNewTaskList] = useState(TaskList);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewTaskList({ ...newTaskList, [name]: value });
    }

    const handleSave = () => {
        saveTaskList(goal, newTaskList);
    }

    const handleDelete = () => {

    }

    return (
        <div>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' defaultValue={newTaskList.name} onChange={handleChange} required />

            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default TaskListEditor;