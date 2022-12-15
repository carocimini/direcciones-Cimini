import { TASKS } from "../../data/tasks";

const initialState = {
    tasks: TASKS,
    filteredTasks: [],
    selected: null,
}

const TaskReducer = (state = initialState, action) => {
    return state
}

export default TaskReducer