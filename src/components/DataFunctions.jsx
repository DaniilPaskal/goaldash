import { Goal, TaskList, Task } from "./Classes";

export function saveGoal(goals, goalData) {
    const newGoal = new Goal(goalData.name, goalData.endDate);
    const index = goals.map((goal) => goal.id).indexOf(goalData.id);

    if (index > -1) {
        newGoal.setId(goalData.id);
        goals[index] = newGoal;
    } else {
        newGoal.setId(goals.length);
        goals.push(newGoal);
    }
}

export function saveTaskList(goal, taskListData) {
    const newTaskList = new TaskList(taskListData.name);
    goal.addTaskList(newTaskList);
}

export function saveTask(taskList, taskData) {
    const newTask = new Task(taskData.name, taskData.duration, taskData.locked);
    taskList.insert(newTask, 0);
}