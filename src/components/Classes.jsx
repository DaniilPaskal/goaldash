export class DailyTask {
    constructor(name, duration, task) {
        this.name = name;
        this.duration = duration;
        this.status = 'onTrack';
        this.task = task;
    }
}

export class Task {
    constructor(name, duration, locked, taskList) {
        this.name = name;
        this.duration = duration;
        this.progress = 0;
        this.locked = locked;
        this.taskList = taskList;
        this.comments = [];
        this.next = null;
        this.prev = null;
        this.complete = false;
    }

    update(name, duration, locked) {
        this.name = name;
        this.duration = duration;
        this.locked = locked;
    }

    incrementProgress(progress) {
        this.progress += progress;

        if (this.progress >= this.duration) {
            this.complete = true;
        }
    }
}

export class TaskList {
    constructor(name, goal) {
        this.length = 0;
        this.duration = 0;
        this.progress = 0;
        this.name = name;
        this.goal = goal;
        this.head = null;
        this.complete = false;
    }

    update(name) {
        this.name = name;
    }

    updateDuration(duration) {
        this.duration += duration;
    }

    incrementProgress(progress) {
        this.progress += progress;
    }

    find(task) {
        var index = 0;
        var taskNode = this.head;

        while(taskNode) {
            if (taskNode === task) {
                return index;
            }
            taskNode = taskNode.next;
            index++;
        }

        return -1;
    }

    insert(task, index) {
        if (index === 0) {
            if (this.head) {
                task.next = this.head;
                this.head.prev = task;
            }
            this.head = task;
            return;
        }

        var prevTask = this.head;

        for (var i = 0; i < index; i++) {
            prevTask = prevTask.next;
        }

        var nextTask = prevTask.next;

        task.next = nextTask;
        task.prev = prevTask;
        prevTask.next = task;
        nextTask.prev = task;

        this.duration += task.duration;
        this.progress += task.progress;
        this.length++;
    }

    remove(index) {
        if (index === 0) {
            var newHead = this.next.head;
            newHead.prev = null;
            this.head = newHead;
            return;
        }

        var prevTask = this.head;

        for (var i = 0; i < index; i++) {
            prevTask = prevTask.next;
        }

        var removeTask = prevTask.next;
        var nextTask = removeTask.next;

        prevTask.next = nextTask;
        nextTask.prev = prevTask;  
        
        this.duration -= removeTask.duration;
        this.progress -= removeTask.progress;
        this.length--;
    }
}

export class Goal {
    constructor(name, endDate) {
        this.id = -1;
        this.name = name;
        this.endDate = endDate;
        this.duration = 0;
        this.progress = 0;
        this.taskLists = [];
        this.complete = false;
    }

    update(name, endDate) {
        this.name = name;
        this.endDate = endDate;
    }

    addTaskList(taskList) {
        const { duration } = taskList;
        this.taskLists.push(taskList);
        this.duration += duration
    }

    updateTaskList(taskList) {
        const { duration, progress } = taskList;
        this.duration += duration;
        this.progress += progress;
    }

    removeTaskList(taskList) {
        var index = this.TaskLists.findIndex(taskList);
        taskList.splice(index, 1);
    }

    setId(id) {
        this.id = id;
    }
}