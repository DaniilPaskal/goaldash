import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TaskListEditor from "./TaskListEditor";
import TaskEditor from "./TaskEditor";
import TaskPanel from "./TaskPanel";
import ProgressBar from "./ProgressBar";
import '../styles/TaskManagementPage.css';

const TaskListPanel = ({ taskList, goal }) => {
    const [showTaskListEditor, setShowTaskListEditor] = useState(false);
    const [showTaskEditor, setShowTaskEditor] = useState(false);
    const [taskArray, setTaskArray] = useState(taskList.getTaskArray());
    const { name, duration, progress } = taskList;

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        taskList.remove(result.source.index);
        taskList.insert(result.destination.index);
        setTaskArray(taskList.getTaskArray());
    }

    return (
        <div className='tasklist-panel'>
            <h1>{name}</h1>
            <ProgressBar duration={duration} progress={progress} />

            <button onClick={() => setShowTaskListEditor(true)}>Edit task list</button>
            <TaskListEditor show={showTaskListEditor} setShow={setShowTaskListEditor} goal={goal} taskList={taskList} />

            <button onClick={() => setShowTaskEditor(true)}>Add task</button>
            <TaskEditor show={showTaskEditor} setShow={setShowTaskEditor} taskList={taskList} />

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='taskList'>
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {taskArray.map((task) => {
                                return (
                                    <Draggable draggableId={task.name}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <TaskPanel task={task} taskList={taskList} key={task} />
                                            </li>
                                        )}
                                    </Draggable>
                                );
                            })}
                        </ul>
                    )} 
                </Droppable>
            </DragDropContext>

        </div>
    );
}

export default TaskListPanel;