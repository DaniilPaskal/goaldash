import '../styles/Dashboard.css';

const TaskIndicator = ({ status }) => {
    const colors = {
        ahead: 'rgb(83, 216, 50)',
        onTrack: 'rgb(55, 178, 226)',
        behind: 'rgb(226, 186, 55)',
    };
    const color = colors[status];

    return (
        <div className='task-indicator' style={{ color: color }} />
    );
}

export default TaskIndicator;