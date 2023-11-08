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