import { Goal, TaskList, Task, DailyTask } from "./Classes";

export function saveGoal(goals, goal, newGoalData) {
    if (goals.includes(goal)) {
        goal.update(newGoalData.name, newGoalData.endDate);
    } else {
        const newGoal = new Goal(newGoalData.name, newGoalData.endDate);
        newGoal.setId(goals.length);
        goals.push(newGoal);
    }
}

export function saveTaskList(goal, taskList, newTaskListData) {
    if (goal.taskLists.includes(taskList)) {
        taskList.update(newTaskListData.name);
    } else {
        const newTaskList = new TaskList(newTaskListData.name);
        goal.addTaskList(newTaskList);
    }
}

export function saveTask(taskList, task, newTaskData) {
    if (taskList.find(task) > -1) {
        task.update(newTaskData.name, newTaskData.duration, newTaskData.locked);
    } else {
        const newTask = new Task(newTaskData.name, newTaskData.duration, newTaskData.locked);
        taskList.insert(newTask, taskList.length);
    }
}

export function deleteGoal(goals, goal) {
    const index = goals.indexOf(goal);

    if (index > -1) {
        goals.splice(index, 1);
    }
}

export function deleteTaskList(goal, taskList) {
    const { taskLists } = goal;
    const index = taskLists.indexOf(taskList);

    if (index > -1) {
        taskLists.splice(index, 1);
    }
}

export function deleteTask(taskList, task) {
    const index = taskList.find(task);

    if (index > -1) {
        taskList.remove(index);
    }
}

export function getDailyTasks(taskList, endDate) {
    const { duration, head } = taskList;
    const startDate = new Date();
    const timeDifference = Math.abs(endDate - startDate);
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const tasksPerDay = Math.ceil(duration.total / dayDifference);
    const dailyTasks = [];
    
    var taskNode = taskList.head;

    while(taskNode) {
        for (var i = 0; i < taskNode.duration.complete; i += tasksPerDay) {
            const newDailyTask = new DailyTask(taskNode.name, tasksPerDay);
            dailyTasks.push(newDailyTask);
        }

        taskNode = taskNode.next;
    }

    return dailyTasks;
}