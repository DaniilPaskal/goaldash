import { useState } from 'react';
import { Task } from './Classes';
import './App.css';

const emptyTask = {
    name: '',
    locked: false
}

const TaskEditor = ({ task = emptyTask }) => {
    const [newTask, setNewTask] = useState(task);
    const {} = newTask;

    return (
        <form className='task-form'>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' required />

            <input type='submit' value='Save' />
        </form>
    );
}

export default TaskEditor;