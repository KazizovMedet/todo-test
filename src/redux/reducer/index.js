const initialState = {
    tasks: [],
}
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]}
        case 'EDIT_TASK':
            return {
                ...state, tasks: state.tasks.map(el => el.id === action.payload.id ? action.payload : el)
            }
        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter(el => el.id !== action.payload)}
        default:
            return state
    }
}