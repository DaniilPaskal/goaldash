import { useState } from 'react';
import { Task } from './Classes';
import Checkbox from './Checkbox';

const emptyTask = {
    name: '',
    duration: 0,
    locked: false
}

const TaskEditor = ({ task = emptyTask }) => {
    const [newTask, setNewTask] = useState(task);
    const {} = newTask;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewTask({ ...newTask, [name]: value });
    }

    const handleSave = () => {
        
    }

    const handleDelete = () => {

    }

    return (
        <form className='task-form'>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' onChange={handleChange} required />

            <label for='duration'>Duration:</label>
            <input type='text' id='duration' name='duration' onChange={handleChange} required />

            <label for='locked'>Locked:</label>
            <Checkbox name='locked' handleChange={handleChange} />

            <input type='submit' value='Save' />
        </form>
    );
}

export default TaskEditor;