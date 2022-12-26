export const SELECTED_TASK = "SELECTED_TASK"
export const FILTERED_TASK = "FILTERED_TASK"

export const selectedTask = (id) => ({
    type: SELECTED_TASK,
    taskID: id,
})

export const filteredTask = () => ({
    type: FILTERED_TASK,
    tasklistID: id,
})