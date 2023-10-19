import { Goal, TaskList, Task } from "./Classes";
import { useGoals } from "../contexts/GoalsContext";

function GetGoals() {
    return useGoals();
}

export function saveGoal(goalData) {
    const goals = GetGoals();
    const newGoal = new Goal(...goalData);
    const index = goals.map((goal) => goal.id).indexOf(newGoal.id);

    if (index > -1) {
        goals[index] = newGoal;
    } else {
        newGoal.setId(goals.length);
        goals.push(newGoal);
    }
}