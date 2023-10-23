export class Task {
    constructor(name, duration, locked) {
        this.name = name;
        this.duration = {
            total: duration,
            complete: 0
        };
        this.locked = locked;
        this.next = null;
        this.prev = null;
    }
}

export class TaskList {
    constructor(name) {
        this.id = -1;
        this.length = 0;
        this.name = name;
        this.head = null;
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
        this.length--;
    }

    setId(id) {
        this.id = id;
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