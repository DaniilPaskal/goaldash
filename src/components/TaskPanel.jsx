import TaskIndicator from './TaskIndicator';

const TaskPanel = ({ task }) => {
    const { name } = task;

    return (
        <div className='task-panel'>
            <TaskIndicator progress='' />
            <h2>{name}</h2>
            
            <button>
                Finish
            </button>
            <button>
                Postpone
            </button>
            <button>
                Edit
            </button>
        </div>
    );
}

export default TaskPanel;