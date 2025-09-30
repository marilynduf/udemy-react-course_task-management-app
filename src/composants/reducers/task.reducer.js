export function tasksReducer(state, action) {
    if (action.type === "ADD_TASK") {
        const newTask = {
            id: Math.random(),
            text: action.payload.text,
            projectIdInTask: action.payload.selectedProjectIdTest,
        };
        return {
            tasks: [...state.tasks, newTask],
        };
    } else if (action.type === "DELETE_TASK") {
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        };
    }
    return state;
}
