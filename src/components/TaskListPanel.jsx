import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TaskListEditor from "./TaskListEditor";
import TaskEditor from "./TaskEditor";
import TaskPanel from "./TaskPanel";
import ProgressBar from "./ProgressBar";
import '../styles/TaskManagementPage.css';

const TaskListPanel = ({ taskList, goal }) => {
    const [showTaskListEditor, setShowTaskListEditor] = useState(false);
    const [showTaskEditor, setShowTaskEditor] = useState(false);
    const { name, head, duration, progress } = taskList;
    const taskArray = [];
    var taskNode = head;

    while (taskNode) {
        taskArray.push(taskNode);
        taskNode = taskNode.next;
    }

    return (
        <div className='tasklist-panel'>
            <h1>{name}</h1>
            <ProgressBar duration={duration} progress={progress} />

            <button onClick={() => setShowTaskListEditor(true)}>Edit task list</button>
            <TaskListEditor show={showTaskListEditor} setShow={setShowTaskListEditor} goal={goal} taskList={taskList} />

            <button onClick={() => setShowTaskEditor(true)}>Add task</button>
            <TaskEditor show={showTaskEditor} setShow={setShowTaskEditor} taskList={taskList} />

            <DragDropContext>
                <Droppable droppableId='taskList'>
                    {taskArray.map((task) => {
                        return(
                            <Draggable draggableId={task.name}>
                                <TaskPanel task={task} taskList={taskList} key={task} />
                            </Draggable>
                        )
                    })}
                </Droppable>
            </DragDropContext>

        </div>
    );
}

export default TaskListPanel;