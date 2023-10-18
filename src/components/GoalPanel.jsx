import { useState } from "react";
import GoalEditor from "./GoalEditor";
import ProgressBar from "./ProgressBar";
import './App.css';

const GoalPanel = ({ goal }) => {
    const [show, setShow] = useState(false);
    const { name, progress, taskLists } = goal;

    return (
        <div className='goal-panel'>
            <h1>{name}</h1>
            <h2>{progress}% done</h2>
            <ProgressBar progress={progress} />

            <button onClick={() => setShow(true)}>Edit goal</button>
            <GoalEditor show={show} setShow={setShow} goal={goal} />

            {taskLists.map((taskList) => {

            })}
        </div>
    );
}

export default GoalPanel;