import { useState } from 'react';
import { Task } from './Classes';
import './App.css';

const emptyTask = {
    name: '',
    duration: 0,
    locked: false
}

const TaskEditor = ({ task = emptyTask }) => {
    const [newTask, setNewTask] = useState(task);
    const {} = newTask;

    return (
        <form className='task-form'>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' required />

            <label for='duration'>Duration:</label>
            <input type='text' id='duration' name='duration' required />

            <input type='submit' value='Save' />
        </form>
    );
}

export default TaskEditor;