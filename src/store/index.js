import { combineReducers, createStore } from "redux";

import TaskReducer from "./reducers/task.reducer";
import TasklistReducer from "./reducers/tasklist.reducer";

const RootReducer =  combineReducers({
    tasklists: TasklistReducer,
    Tasks: TaskReducer,
})

export default createStore(RootReducer)