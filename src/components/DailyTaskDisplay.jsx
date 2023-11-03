import TaskIndicator from './TaskIndicator';

const DailyTaskDisplay = ({ dailyTask }) => {
    const { name, duration, status } = dailyTask;

    return (
        <div>
            <h3>{name}</h3>
            <p>{duration}</p>
            <div>
                <TaskIndicator status={status} />
                <button>Done</button>
                <button>Postpone</button>
                <button>Edit</button>
            </div>
        </div>
    );
}

export default DailyTaskDisplay;