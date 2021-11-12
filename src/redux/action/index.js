export const addTask = (data) =>{
    return {type: 'ADD_TASK', payload: data}
}

export const editTask = (data) =>{
    return {type: 'EDIT_TASK', payload: data}
}

export const removeTask = (data) =>{
    return {type: 'DELETE_TASK', payload: data}
}
