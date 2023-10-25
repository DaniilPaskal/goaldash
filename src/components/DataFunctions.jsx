import { Goal, TaskList, Task } from "./Classes";

export function saveGoal(goals, goal, newGoal) {
    if (goals.includes(goal)) {
        goal.update(newGoal.name, newGoal.endDate);
    } else {
        goals.push(new Goal(newGoal.name, newGoal.endDate));
    }
}

export function saveTaskList(goal, taskList, newTaskList) {
    if (goal.taskLists.includes(taskList)) {
        taskList.update(newTaskList.name);
    } else {
        goal.addTaskList(new TaskList(newTaskList.name));
    }
}

export function saveTask(taskList, task, newTask) {
    console.log(taskList.head)
    if (taskList.find(task)) {
        task.update(newTask.name, newTask.duration, newTask.locked);
    } else {
        taskList.insert(new Task(newTask.name, newTask.duration, newTask.locked), taskList.length);
    }
}