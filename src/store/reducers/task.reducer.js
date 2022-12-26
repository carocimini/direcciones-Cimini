import { FILTERED_TASK, SELECTED_TASK } from "../actions/taskactions";

import { TASKS } from "../../data/tasks";

const initialState = {
    tasks: TASKS,
    filteredTasks: [],
    selected: null,
}

const TaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECTED_TASK:
            return {
                ...state,
                selected: state.tasks.find((tasks) => tasks.id === action.taskID)
            }
        case FILTERED_TASK:
            return{
                ...state,
                filteredTasks: state.tasks.filter((tasks) => tasks.tasklist === action.tasklistID)
            }

        default:
            return state

    }
}

export default TaskReducer