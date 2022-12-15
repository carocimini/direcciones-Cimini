import { SELECTED_TASKLIST } from '../actions/tasklist.action'
import { Switch } from 'react-native'
import { TASKLIST } from '../../data/tasklist'

const initialState = {
    tasklists: TASKLIST,
    selected: null
}

const TasklistReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECTED_TASKLIST:
            const IndexTasklist = state.tasklists.findIndex(
                cat => cat.id === action.tasklistID
            )
            if(IndexTasklist === -1) return state
            return {...state, selected: state.tasklists[IndexTasklist]}
        default:
            break,
    }
}

export default TasklistReducer