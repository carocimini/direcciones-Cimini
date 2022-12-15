export const SELECTED_TASKLIST = "SELECTED_TASKLIST"

export const selectedTasklist = (id) => ({
    type: SELECTED_TASKLIST,
    tasklistID: id,
})