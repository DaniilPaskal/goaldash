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
        this.complete = false;
        this.next = null;
        this.prev = null;
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
        this.duration = {
            total: 0,
            complete: 0
        }
        this.name = name;
        this.goal = goal;
        this.head = null;
    }

    update(name) {
        this.name = name;
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

        this.duration.total += task.duration.total;
        this.duration.complete += task.duration.complete;
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
        
        this.duration.total -= removeTask.duration.total;
        this.duration.complete -= removeTask.duration.complete;
        this.length--;
    }
}

export class Goal {
    constructor(name, endDate) {
        this.id = -1;
        this.name = name;
        this.endDate = endDate;
        this.progress = 0;
        this.taskLists = [];
    }

    update(name, endDate) {
        this.name = name;
        this.endDate = endDate;
    }

    addTaskList(taskList) {
        this.taskLists.push(taskList);
    }

    removeTaskList(taskList) {
        var index = this.TaskLists.findIndex(taskList);
        taskList.splice(index, 1);
    }

    setId(id) {
        this.id = id;
    }
}